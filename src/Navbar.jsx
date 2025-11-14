import "./Navbar.css";
import logo from "./assets/portfolio.png"
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">
                        <img src={logo} alt="Logo Tasnim Mjid" />
                    </a>
                </div>
                <ul className="nav-links">
                    <a href="#home">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#projects">Projets</a>
                    <a href="#experience">Expérience</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
        </nav>
    );
}
