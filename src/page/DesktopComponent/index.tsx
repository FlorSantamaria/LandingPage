
import "./styles.css";
import imagenPrincipal from "../../assets/imagenPrincipal.jpg"; 
import logo from "../../assets/Logo.png"
import { Benefits } from "../../components/Beneficios/Benefits";
import GooglePlayButton from "../../components/GoogleBoton";
import { invitacion } from "../../components/Textos/invitacion";

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
          <div className="image-container">
              <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
          </div>
              <div className="benefits-container">
                    <Benefits />   
              </div>

              <div className="containerButton">
                <GooglePlayButton />
              </div>
      </div>
  );
};