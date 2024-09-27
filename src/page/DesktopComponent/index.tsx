import React from "react";
import "./styles.css";
import imagenPrincipal from "../../assets/mano.jpeg"; 
import tecnicas from "../../assets/tecnicas.jpg"; 
import Registro from "../../assets/Captura2.jpg"; 
import Herramientas from "../../assets/Captura.jpg"; 
import CustomCardComponent from "../../components/Beneficios";
import logo from "../../assets/Logo.png"
import BlueButton from "../../components/GoogleBoton";
import IconTextCard from "../../components/Beneficios";
import { Benefits } from "../../components/Beneficios/Benefits";
import GooglePlayButton from "../../components/GoogleBoton";

export const DesktopComponent = () => {
  return (
       <div className="container">
          <div className="left-section">
              <div className="logo-text-container">
                  <img src={logo} alt="Logo" className="logo" />
                  <h2>Te acompañamos en tu bienestar emocional</h2>
              </div>
              <div className="subtitle">
                  <h5>No tenes que controlar tus pensamientos, solo tenes que impedir que te controlen</h5>
                  <p>Te invitamos a descargar Alaya, la aplicación que va a ayudarte a controlar tus emociones en los momentos que más necesites </p>
              </div>
              <div className="benefits-container">
                    <Benefits />   
              </div>

              <div className="containerButton">
                <GooglePlayButton />
              </div>
          </div>
          <div className="image-container">
              <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
          </div>
      </div>
  );
};