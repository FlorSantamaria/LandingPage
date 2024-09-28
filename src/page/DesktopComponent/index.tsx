
import "./styles.css";
import imagenPrincipal from "../../assets/imagenPrincipal.jpg"; 
import logo from "../../assets/Logo.png"
import { Benefits } from "../../components/Beneficios/Benefits";
import GooglePlayButton from "../../components/GoogleBoton";
import { invitacion } from "../../components/Textos/invitacion";
import CustomCardComponent from "../../components/Beneficios";
import tecnicas from "../../assets/tecnicas.jpg"; 
import Registro from "../../assets/Registrar.jpeg"; 
import Herramientas from "../../assets/Captura.jpg";


export const DesktopComponent = () => {
  return (
       <div className="container">
              <div className="logo-text-container">
                  <p className="hover-effect">QUIÉNES SOMOS</p>
                  <img src={logo} alt="Logo" className="logo" />
                  <p className="hover-effect">CONTÁCTANOS</p>
              </div>
              <div className="subtitle">
                  <h5>No tenes que controlar tus pensamientos, solo tenes que impedir que te controlen</h5>
                  <p>{invitacion}</p>
              </div>
              <div className="benefits-container">
        <div className="benefits-column">
            <CustomCardComponent icon={Herramientas} text="Encontrarás recursos que te ayudarán a relajarte y mejorar tu equilibrio emocional en cualquier momento" />
            <CustomCardComponent icon={tecnicas} text="Interacción con tu propio terapeuta logrando un tratamiento personalizado" />

        </div>
        
        <div className="image-container">
            <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
        </div>
        
        <div className="benefits-column">
            <CustomCardComponent icon={tecnicas} text="Te ofrecemos técnicas para superar momentos difíciles y ejercicios diarios que te ayudarán a mejorar el control de tus pensamientos y emociones" />
            <CustomCardComponent icon={Registro} text="Podrás registrar los momentos difíciles y tus pensamientos diarios." />
        </div>
    </div>
              <div className="containerButton">
                <GooglePlayButton />
              </div>
      </div>
  );
};