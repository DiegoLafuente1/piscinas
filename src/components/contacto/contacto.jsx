import React from "react";
import './contacto.css'

const Contacto = () => {
  return (
    <div className="contacto">
      <div>
        <h2>Contacto</h2>
        <hr />
      </div>
      <div className="contacto-info">
        <h3>Jorvid</h3>
        <a href="https://outlook.live.com/mail/0/" className="correo" target="blank"><p>dsfsofsofsfsof@hotmail.com</p></a>
        <p>95595495959</p>
        <p>Lunes a Viernes de 09:00 a 18:00 horas y Sábados de 09:00 a 13:00 horas</p>
      </div>
    </div>
  );
};

export default Contacto;
