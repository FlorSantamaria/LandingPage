import React from "react";
import "./styles.css";
import imagenPrincipal from "../assets/mano.jpeg"; 
import soporte from "../assets/soporte.jpg"; 
import Registro from "../assets/Registro.jpg"; 
import Herramientas from "../assets/Herramientas.jpg"; 
import { BeneficiosComponent } from "../components/Beneficios";
import logo from "../assets/Logo.png"

export const HomePage = () => {
    return (
      <div className="container">
        <div className="left-section">
        <div className="logo-text-container"> {/* Nueva clase contenedora */}
          <img src={logo} alt="Logo" className="logo" />
          <h2>Tu apoyo en momentos difíciles</h2>
        </div>
        <div className="subtitle">
            <h5>Tu salud emocional es muy importante!</h5>
            <p>Por eso te brindamos herramientas para ayudarte a enfrentar momentos de crisis ¡Con contacto directo a profesionales!</p>

        </div>


          <div className="benefits-container">
            <BeneficiosComponent icon={Herramientas} title= "Soporte:" text="Herramientas prácticas para momentos de crisis, como ejercicios de respiración guiada, meditación y diarios de emociones." />
            <BeneficiosComponent icon={soporte} title="Contacto directo con psicólogos:"text=" Comunicación directa con profesionales de salud mental." />
            <BeneficiosComponent icon={Registro} title= "Seguimiento:"text=" Registro diario del estado emocional para monitorear el progreso" />
     
          </div>
        </div>
        <div className="image-container">
          <img src={imagenPrincipal} alt="Imagen" className="responsive-image" />
        </div>
      </div>
    );
  };