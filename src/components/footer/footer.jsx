import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/imagenes/logo transparente.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-logo">
                <img
                    src={Logo}
                    alt=""
                />
            </div>
            <div className="footer-redes">
                <a href="https://www.facebook.com/?locale=es_LA" target="blank" className="social"><FontAwesomeIcon icon={faFacebook}  /><p>Facebook</p></a>
                <a href="https://web.whatsapp.com/#" target="blank" className="social"><FontAwesomeIcon icon={faWhatsapp}  /><p>Whatsapp</p></a>
                <a href="https://www.instagram.com/" target="blank" className="social"><FontAwesomeIcon icon={faInstagram}  /><p>Instagram</p></a>
            </div>
        </div>
    )
}

export default Footer;
