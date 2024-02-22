import React, { useState } from "react";
import './items.css';
import { Link } from "react-router-dom";
import Piscina from '../../assets/imagenes/piscina.jpg'
import Piscina2 from '../../assets/imagenes/piscina2.jpg'
import Piscina3 from '../../assets/imagenes/piscina3.jpg'
import Piscina4 from '../../assets/imagenes/piscina grande.jpg'
import Piscina5 from '../../assets/imagenes/piscina grande2.jpg'

const Items = () => {
  const [mostrarBoton1, setMostrarBoton1] = useState(false);
  const [mostrarBoton2, setMostrarBoton2] = useState(false);

  const manejarMouseEnter1 = () => {
    setMostrarBoton1(true);
  };

  const manejarMouseLeave1 = () => {
    setMostrarBoton1(false);
  };

  const manejarMouseEnter2 = () => {
    setMostrarBoton2(true);
  };

  const manejarMouseLeave2 = () => {
    setMostrarBoton2(false);
  };

  return (
    <div className="principal">
      <div className="items">
        <div
          className="imagen-contenedor"
          onMouseEnter={manejarMouseEnter1}
          onMouseLeave={manejarMouseLeave1}
        >
          <img
            className="imagen"
            src={Piscina4}
            alt=""
          />
          {mostrarBoton1 && (
            <Link to="/itemDetail">
              <button className="boton-imagen">
                Ver mas
              </button>
            </Link>
          )}
        </div>
        <div
          className="imagen-contenedor"
          onMouseEnter={manejarMouseEnter2}
          onMouseLeave={manejarMouseLeave2}
        >
          <img
            className="imagen"
            src={Piscina5}
            alt=""
          />
          {mostrarBoton2 && (
            <Link to="/itemDetail">
              <button className="boton-imagen">
                Ver mas
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="titulo-abajo">
        <h2>LO MAS VENDIDO</h2>
      </div>
      <div className="items-abajo">
        <div class="imagen-con-texto">
          <img src={Piscina} alt="" />
          <p>Texto para la primera imagen</p>
        </div>

        <div class="imagen-con-texto">
          <img src={Piscina2} alt="" />
          <p>Texto para la segunda imagen</p>
        </div>

        <div class="imagen-con-texto">
          <img src={Piscina3} alt="" />
          <p>Texto para la tercera imagen</p>
        </div>
      </div>

      <div className="btn-todo">
        <Link to="/itemDetail">
          <button>Ver todo</button>
        </Link>
      </div>

      <div className="nosotros">
        <h3>Quienes somos</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus consequuntur, itaque fugit laudantium ratione, id beatae voluptatibus, dolor eaque incidunt ex odio ipsa harum? Minus quae ullam aperiam eligendi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, similique itaque aliquid asperiores alias temporibus ipsum autem placeat id neque exercitationem. Quam iste ducimus sint impedit, excepturi ratione voluptatum similique?</p>
      </div>
    </div>
  );
};

export default Items;
