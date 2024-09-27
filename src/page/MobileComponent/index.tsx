import logo from "../../assets/Logo.png"
import imagenPrincipal from "../../assets/imagenPrincipal.jpg"; 
import './styles.css'
import { Benefits } from "../../components/Beneficios/Benefits";
import GooglePlayButton from "../../components/GoogleBoton";
import HamburgerMenu from "../../components/HamburguerMenu";
import { invitacion } from "../../components/Textos/invitacion";

export const MobileComponent = () => {
    return(
        <div className="container">
            <HamburgerMenu />
            <div className="logo-text-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="subtitle">
            <h5>No tenes que controlar tus pensamientos, sólo tenes que impedir que te controlen</h5>
            <p>{invitacion}</p>
            </div>
         <div className="image-container">
            <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
            </div>
            <div className="benefits-container">
                <div className="containerButton">
                <GooglePlayButton />
              </div>
            <Benefits />

            </div> 

         
    </div>
    )
}