import "./Experience.css";
import sofrecomLogo from "./assets/sofrecom-logo.png";
import discoveryLogo from "./assets/discovery-info.png";
import TacTicLogo from "./assets/TAC-TIC.png";


export default function Experience() {
    return (
        <section id="experience" className="experience-section" data-aos="fade-up">
            <h2 className="experience-title">Expériences Professionnelles</h2>

            <div className="experience-list">

                <div className="experience-item">
                    <div className="experience-header">
                        <img src={sofrecomLogo} alt="Sofrecom Tunisie" className="experience-logo" />
                        <div>
                            <h3 className="experience-company">Sofrecom Tunisie</h3>
                            <h4 className="experience-role">Stage de Fin d’Études – Février à Juillet 2025</h4>
                        </div>



                    </div>

                    <p className="experience-description">
                        Projet : <strong>Optimisation de la géneration automatique des configurations et des tests réseaux.</strong>.
                    </p>
                    <ul className="experience-tasks">
                        <li>Développement et optimisation d’un pipeline CI/CD pour automatiser la configuration des services réseaux.</li>
                        <li> Développement d'une application web (Frontend et Backend ) à travers laquelle l'utilisateur peut soumettre les configurations des services réseaux via un ficher Excel pour eviter la modification manuelle des fichiers de configurations. </li>
                        <li> Développement d'un modèle IA de détection d'anomalies avec agent intelligent pour les recommandations des actions correctifs.</li>
                    </ul>
                    <div className="experience-tools">
                        <p className="tools-title">Outils utilisés :</p>
                        <p className="tools-list">ReactJS · FastAPI · Python · Ansible · GitLab CI/CD · Prometheus · Machine Learning · LLM · Docker · Docker-compose</p>
                    </div>

                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <img src={discoveryLogo} alt="Discovery" className="experience-logo" />
                        <div>
                            <h3 className="experience-company">Discovery Informatique</h3>
                            <h4 className="experience-role">Stage d’Ingénieur – Juin à Juillet 2024</h4>
                        </div>
                    </div>
                    <p className="experience-description">
                        Projet : <strong>Conversion et intégration automatique d'une facture d'achat dans Business Central a l'aide de l'OCR</strong>.
                    </p>
                    <ul className="experience-tasks">
                        <li>Dans ce projet j'ai réaliser l' automatique d'une facture d'achat après etre envoyer par le fournisseur dans le système ERP Microsoft Dynamics 365 en utilisant l'outils OCR pour extraire les informations de la facture et les intégrés dans le système ERP au lieu de le faire manuellement .</li>
                    </ul>
                    <div className="experience-tools">
                        <p className="tools-title">Outils utilisés :</p>
                        <p className="tools-list">OCR ·  Microsoft Dynamics 365 Business Central</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <img src={TacTicLogo} alt="Discovery" className="experience-logo" />
                        <div>
                            <h3 className="experience-company">TAC-TIC</h3>
                            <h4 className="experience-role">Stage d’Initiation – Juillet 2023</h4>
                        </div>
                    </div>
                    <p className="experience-description">
                        Projet : <strong> Conception d'une architecture pour un système de contrôle d'accès en utilisant un logiciel de simulation</strong>.
                    </p>
                    <ul className="experience-tasks">
                        <li>Dans ce projet, j’ai conçu l’architecture d’un système de contrôle d’accès pour une porte, en détaillant l’ensemble des composants du système ainsi que leurs interconnexions, afin de guider l’utilisateur et de lui faciliter la mise en place de ce dispositif.</li>
                    </ul>
                    <div className="experience-tools">
                        <p className="tools-title">Outils utilisés :</p>
                        <p className="tools-list">PROTEUS </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
