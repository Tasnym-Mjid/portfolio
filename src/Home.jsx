import "./Home.css";
import profilPhoto from "./assets/tasnim-photo.jpg";
import { FiDownload } from "react-icons/fi";

export default function Home() {
    return (
        <section id="home" className="home-section" data-aos="fade-up">
            <div className="home-title-container">
                <img src={profilPhoto} alt="Tasnim Mjid" className="home-photo-inline" />
                <div>
                    <h1 className="home-title">Tasnim Mjid</h1>
                    <p className="home-subtitle">
                        Ingénieur informatique fraichement diplômée de l'ENIT
                    </p>
                    <div className="home-buttons">
                        <a href="#projects" className="btn-primary">Voir mes projets</a>
                        <a
                            href="/MJID-TASNIM.pdf"
                            className="btn-tertiary cv-button"
                            download
                        >
                            <FiDownload className="cv-icon" />
                            Télécharger CV
                        </a>
                        <a href="#contact" className="btn-secondary">Contact</a>

                    </div>
                </div>

            </div>


        </section>
    );
}
