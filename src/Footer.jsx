import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Tasnim Mjid</p>

            <div className="footer-location">
                <FaMapMarkerAlt className="location-icon" />
                <span>Bizerte, Tunisie</span>
            </div>

            <div className="footer-icons">
                <a href="mailto:tasnim.mjid.2000@gmail.com">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/Tasnym-Mjid" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/tasnim-mjid-836b1a289/" target="_blank">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
}
