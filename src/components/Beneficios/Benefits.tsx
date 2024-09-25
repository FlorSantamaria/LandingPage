import CustomCardComponent from "./index"
import tecnicas from "../../assets/tecnicas.jpg"; 
import Registro from "../../assets/Captura2.jpg"; 
import Herramientas from "../../assets/Captura.jpg"; 

export const Benefits = () => {
    return (
        <div>
            <CustomCardComponent icon={Herramientas}text="Encontrarás recursos que te ayudarán a relajarte y mejorar tu equilibrio emocional en cualquier momento" />
            <CustomCardComponent icon={Registro} text="Podrás registrar los momentos difíciles y tus pensamientos diarios," />
            <CustomCardComponent icon={tecnicas} text="Te ofrecemos técnicas para superar momentos difíciles y ejercicios diarios que te ayudarán a mejorar el control de tus pensamientos y emociones" /> 
        </div>
    )
}