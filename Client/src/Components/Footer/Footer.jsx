import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Sígueme en redes sociales:</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a
              href="https://www.facebook.com/tupagina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="ruta-a-tu-icono-de-Facebook.png"
                alt="Facebook"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://www.instagram.com/tuinstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="ruta-a-tu-icono-de-Instagram.png"
                alt="Instagram"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=tunumerodetelefono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="ruta-a-tu-icono-de-WhatsApp.png"
                alt="WhatsApp"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://www.tiktok.com/@tucuenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="ruta-a-tu-icono-de-TikTok.png"
                alt="TikTok"
                width="32"
                height="32"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
