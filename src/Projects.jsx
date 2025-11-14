import "./Projects.css";
import Portfolio from "./assets/portfolio-bg.jpg";
import medApp from "./assets/medecin-app.png";
import med from "./assets/medical-bg.jpg";
import restaurant from "./assets/restaurant-bg.jpg";




export default function Projects() {
    return (
        <section id="projects" className="projects-section" >
            <h2 className="projects-title">Mes Projets</h2>

            <div className="projects-container">

                <div className="project-card" data-aos="fade-up">
                    <div className="project-content" >
                        <img
                            src={restaurant}
                            alt="aperçu portfolio"
                            className="project-image"
                        />
                        <h3> Platforme de Gestion de Restaurants</h3>
                        <p>
                            Développement d'une application web complète de gestion de restaurants, incluant la gestion des restaurants ,leurs  menus, des commandes en ligne .
                        </p>
                        <p className="project-tech">Outils: NodeJS · ExpressJS · ReactJS · MongoDB</p>
                        <a href="https://github.com/RaniaDg12/Restaurant" className="project-btn" target="_blank" rel="noreferrer">
                            Voir sur GitHub
                        </a>
                    </div>
                </div>

                <div className="project-card" data-aos="fade-up">
                    <div className="project-content">
                        <img
                            src={med}
                            alt="aperçu portfolio"
                            className="project-image"
                        />
                        <h3> Projet de fin d'année 2 (PFA2)</h3>
                        <p>
                            Réalisation d'une application mobile permettant aux medecins de gérer les  données des patients et leurs dossiers médical et permettant aux patients de passer des rendez-vous.
                        </p>
                        <p className="project-tech">Outils: Flutter · Dart · Firebase </p>
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
                    <div className="project-content">
                        <img
                            src={Portfolio}
                            alt="aperçu portfolio"
                            className="project-image"
                        />
                        <h3>Site Portfolio Personnel</h3>
                        <p>
                            Développement d’un site web personnel en ReactJS pour présenter
                            mes compétences, projets et expériences professionnelles.
                        </p>
                        <p className="project-tech">Outils: React · CSS · Vite</p>
                        <a href="https://github.com/Tasnym-Mjid/portfolio" className="project-btn" target="_blank" rel="noreferrer">
                            Voir sur GitHub
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
