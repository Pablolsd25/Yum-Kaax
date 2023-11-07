import React from "react";
import Fb from "../assets/facebook.svg";
import Insta from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Tiktok from "../assets/tiktok.svg";

import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white text-center py-2">
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
              <img src={Fb} alt="Facebook" width="32" height="32" />
            </a>
            <a
              href="https://www.instagram.com/tuinstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="Instagram" width="32" height="32" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=tunumerodetelefono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="WhatsApp" width="32" height="32" />
            </a>
            <a
              href="https://www.tiktok.com/@tucuenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Tiktok} alt="TikTok" width="32" height="32" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
