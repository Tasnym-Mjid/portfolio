import "./Projects.css";
import Portfolio from "./assets/portfolio-project.jpg";
import medApp from "./assets/medecin-app.png";
import med from "./assets/medical-project.jpg";
import restaurant from "./assets/restaurant-project.jpg";




export default function Projects() {
    return (
        <section id="projects" className="projects-section" >
            <h2 className="projects-title">Mes Projets</h2>

            <div className="projects-container">

                <div className="project-card" data-aos="fade-up">
                    <img
                        src={restaurant}
                        alt="aperçu portfolio"
                        className="project-image"
                    />
                    <div className="project-content" >
                        <h3> Platforme de Gestion de Restaurants</h3>
                        <p>
                            Développement d'une application web complète de gestion de restaurants, incluant la gestion des restaurants ,leurs  menus, des commandes en ligne .
                        </p>
                        <div className="project-tech-list">
                            <span className="tech-badge">NodeJS</span>
                            <span className="tech-badge">ReactJS</span>
                            <span className="tech-badge">ExpressJS</span>
                            <span className="tech-badge">MongoDB</span>
                        </div>
                        <a href="https://github.com/RaniaDg12/Restaurant" className="project-btn" target="_blank" rel="noreferrer">
                            Voir sur GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card" data-aos="fade-up">
                    <img
                        src={med}
                        alt="aperçu portfolio"
                        className="project-image"
                    />
                    <div className="project-content">
                        <h3> Projet de fin d'année 2 (PFA2)</h3>
                        <p>
                            Réalisation d'une application mobile permettant aux medecins de gérer les  données des patients et leurs dossiers médical et permettant aux patients de passer des rendez-vous.
                        </p>
                        <div className="project-tech-list">
                            <span className="tech-badge">Flutter</span>
                            <span className="tech-badge">Dart</span>
                            <span className="tech-badge">Firebase</span>
                        </div>
                        <div className="project-footer">
                            <a href="https://github.com/Tasnym-Mjid/Flutter" className="project-btn" target="_blank" rel="noreferrer">
                                Voir sur GitHub
                            </a>

                            <img
                                src={medApp}
                                alt="capture projet"
                                className="project-screenshot"
                            />
                        </div>

                    </div>
                </div>

                <div className="project-card" data-aos="fade-up">
                    <img
                        src={Portfolio}
                        alt="aperçu portfolio"
                        className="project-image"
                    />
                    <div className="project-content">
                        <h3>Site Portfolio Personnel</h3>
                        <p>
                            Développement d’un site web personnel en ReactJS pour présenter
                            mes compétences, projets et expériences professionnelles.
                        </p>
                        <div className="project-tech-list">
                            <span className="tech-badge">ReactJS</span>
                            <span className="tech-badge">CSS</span>
                            <span className="tech-badge">Vite</span>
                        </div>
                        <a href="https://github.com/Tasnym-Mjid/portfolio" className="project-btn" target="_blank" rel="noreferrer">
                            Voir sur GitHub
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
