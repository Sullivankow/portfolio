
import React from "react";

const technoLogos = [
  "bootstrap.png",
  "css.png",
  "docker.svg",
  "html.png",
  "js.png",
  "next-js.webp",
  "node-js.png",
  "php.png",
  
  "prisma.webp",
  "react.png",
  "symfony.svg",
  "tailwind.png",
  "typescript.svg",
];

function Banniere() {
  return (
    <div className="w-full overflow-hidden py-4 bg-[#0a2342]">
      <div className="flex items-center animate-scroll-banner gap-10 min-w-max">
        {technoLogos.map((logo, idx) => (
          <img
            key={idx}
            src={`/src/assets/techno/${logo}`}
            alt={logo.replace(/\..+$/, "")}
            className="h-12 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
            style={{ minWidth: 48 }}
          />
        ))}
        {/* On duplique pour effet infini */}
        {technoLogos.map((logo, idx) => (
          <img
            key={"dup-"+idx}
            src={`/src/assets/techno/${logo}`}
            alt={logo.replace(/\..+$/, "")}
            className="h-12 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
            style={{ minWidth: 48 }}
          />
        ))}
      </div>
      {/* Animation CSS à ajouter dans index.css ou tailwind.config.js */}
    </div>
  );
}

export default Banniere;