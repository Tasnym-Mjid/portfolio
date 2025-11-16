import "./Navbar.css";
import logo from "./assets/portfolio.png"
import { Link } from "react-scroll";
import profilePic from "./assets/tasnim-photo.jpg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-profile">
                    <img src={profilePic} alt="Tasnim Mjid" className="profile-img" />
                    <span className="profile-name">Tasnim</span>
                </div>
                <ul className="nav-links">
                    <a href="#home">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#projects">Projets</a>
                    <a href="#experience">Expérience</a>
                    <a href="#associative-life">Vie Associative</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
        </nav>
    );
}
