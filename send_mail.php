<?php

// Script d'envoi de mail pour le formulaire de contact React

// Affichage des erreurs PHP (utile en développement)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Réponse JSON pour le front
header('Content-Type: application/json; charset=utf-8');

$errors = [];

// Limitation basique par IP : empêche l'envoi de plusieurs mails en quelques secondes
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rl_file = sys_get_temp_dir() . '/contact_rl_' . md5($ip);
$limit_seconds = 5;
if (file_exists($rl_file) && (time() - filemtime($rl_file) < $limit_seconds)) {
    // Trop de requêtes, on bloque
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Trop de requêtes. Réessayez dans quelques secondes.']);
    exit;
}

// Lecture des données envoyées (JSON ou POST)
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    // Si ce n'est pas du JSON, on récupère les données du formulaire classique
    $data = $_POST;
}

// Récupération des champs du formulaire
$firstName = trim($data['firstName'] ?? ''); // Prénom
$lastName = trim($data['lastName'] ?? '');   // Nom
$name = trim($firstName . ' ' . $lastName);  // Nom complet
$email = trim($data['email'] ?? '');         // Email
$phone_raw = trim($data['phone'] ?? '');     // Téléphone
$message = trim($data['message'] ?? '');     // Message
$honeypot = trim($data['website'] ?? $data['website_field'] ?? ''); // Champ anti-bot

// Si le champ anti-bot est rempli, on accepte silencieusement (pour tromper les robots)
if ($honeypot !== '') {
    @touch($rl_file);
    echo json_encode(['ok' => true]);
    exit;
}

// Validation des champs
if (strlen($name) < 2) {
    $errors[] = 'Le nom est requis.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email invalide.';
}
if (strlen($message) < 5) {
    $errors[] = 'Le message est trop court.';
}

// Nettoyage et validation du téléphone
$phone = '';
if ($phone_raw !== '') {
    $phone = preg_replace('/[^0-9+()\s-]/', '', $phone_raw);
    $digits = preg_replace('/\D/', '', $phone);
    if (strlen($digits) < 6 || strlen($phone) > 25) {
        $errors[] = 'Téléphone invalide.';
    }
}

// Si erreurs, on renvoie une réponse d'erreur
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

// Fonction d'échappement pour éviter les injections
function esc($s) { return trim(htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')); }

// Construction du corps du mail (texte brut)
$plain = "Nom: " . esc($name) . "\n";
$plain .= "Email: " . esc($email) . "\n";
$plain .= "Téléphone: " . ($phone !== '' ? esc($phone) : 'Non fourni') . "\n\n";
$plain .= "Message:\n" . esc($message) . "\n";

// Mise à jour du fichier de limitation (rate-limit)
@touch($rl_file);

// Paramètres du mail
$to_address = 'sundly@live.fr'; // Destinataire
$subject = 'Contact SunDev — ' . esc($name); // Sujet
$headers = 'From: ' . esc($name) . ' <' . esc($email) . ">\r\n";
$headers .= 'Reply-To: ' . esc($email) . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8\r\n';

// Envoi du mail
$sent = @mail($to_address, $subject, $plain, $headers);
if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Message envoyé']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur lors de l\'envoi.']);
}
