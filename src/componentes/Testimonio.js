import React from "react";
import "../componentes-estilos/Testimonio.css";

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.png`)}/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio"><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;