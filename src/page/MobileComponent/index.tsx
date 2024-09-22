// import { BeneficiosComponent } from "../../components/Beneficios"
import logo from "../../assets/Logo2.png"
import imagenPrincipal from "../../assets/mano.jpeg"; 
import soporte from "../../assets/soporte.jpg"; 
import Registro from "../../assets/Registro.jpg"; 
import Herramientas from "../../assets/Herramientas.jpg";
import './styles.css'
import { Button } from "@mui/material";
import BlueButton from "../../components/BlueButton";
import IconTextCard from "../../components/Beneficios";


export const MobileComponent = () => {
    return(
        <div className="container">
            <div className="logo-text-container">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Tu apoyo en momentos difíciles</h2>
            </div>
            <div className="subtitle">
            <h5>No tenes que controlar tus pensamientos, solo tenes que impedir que te controlen</h5>
            <p>Te invitamos a descargar Alaya, la aplicación que va a ayudarte a controlar tus emociones en los momentos que más necesites </p>
            </div>
         <div className="image-container">
            <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
            </div>
            <div className="benefits-container">
                 <IconTextCard icon={Herramientas} title="Soporte" text="Herramientas prácticas para momentos de crisis, como ejercicios de respiración guiada, meditación y diarios de emociones." />
                <IconTextCard icon={soporte} title="Contacto directo con psicólogos" text="Comunicación directa con profesionales de salud mental." />
                <IconTextCard icon={Registro} title="Seguimiento" text="Registro diario del estado emocional para monitorear el progreso" />   

                <div className="containerButton">
                <BlueButton />
              </div>
            </div> 

         
    </div>
    )
}