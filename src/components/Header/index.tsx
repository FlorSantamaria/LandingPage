import "./styles.css";
import logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="header-overlay">
                <h1>Serena</h1>
                <p>Tu apoyo en momentos difíciles</p>
            </div>
        </div>
    );
}