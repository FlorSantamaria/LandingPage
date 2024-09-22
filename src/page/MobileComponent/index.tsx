import { BeneficiosComponent } from "../../components/Beneficios"
import logo from "../../assets/Logo2.png"
import imagenPrincipal from "../../assets/mano.jpeg"; 
import soporte from "../../assets/soporte.jpg"; 
import Registro from "../../assets/Registro.jpg"; 
import Herramientas from "../../assets/Herramientas.jpg";

export const MobileComponent = () => {
    return(
        <div className="container">
            {/* <div className="logo-text-container"> */}
                <img src={logo} alt="Logo" className="logo" />
                <h2>Tu apoyo en momentos difíciles</h2>
            {/* </div> */}
            <div className="subtitle">
                <h5>Tu salud emocional es muy importante!</h5>
                <p>Por eso te brindamos esta aplicación móvil con herramientas para ayudarte a afrontar problemas como estrés, ataques de pánico o ansiedad ¡Con contacto directo a tu profesional!</p>
            </div>
        <div className="image-container">
            <img src={imagenPrincipal} alt="Imagen Principal" className="responsive-image" />
        </div>
            <div className="benefits-container">
                <BeneficiosComponent icon={Herramientas} title="Soporte:" text="Herramientas prácticas para momentos de crisis, como ejercicios de respiración guiada, meditación y diarios de emociones." />
                <BeneficiosComponent icon={soporte} title="Contacto directo con psicólogos:" text="Comunicación directa con profesionales de salud mental." />
                <BeneficiosComponent icon={Registro} title="Seguimiento:" text="Registro diario del estado emocional para monitorear el progreso" />  
            </div>
    </div>
    )
}