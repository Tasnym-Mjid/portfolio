import "./Skills.css";
import htmlLogo from "./assets/Skills/HTML.png";
import javascriptLogo from "./assets/Skills/javascript-logo.png";
import CSSLogo from "./assets/Skills/CSS-Logo.png";
import SpringLogo from "./assets/Skills/spring-boot-logo.png";
import ReactLogo from "./assets/Skills/ReactJS.png";
import pythonLogo from "./assets/Skills/Python-logo.png";
import promLogo from "./assets/Skills/prometheus-logo.png";
import nodeLogo from "./assets/Skills/Node.js-logo.png";
import sqlLogo from "./assets/Skills/mysql-logo.png";
import gitLogo from "./assets/Skills/GitHub-logo.png";
import mongoLogo from "./assets/Skills/mongodb.png";
import javaLogo from "./assets/Skills/Java-logo.png";
import gitLabLogo from "./assets/Skills/GitLab-logo.png";
import fastapiLogo from "./assets/Skills/FastAPI-logo.png";
import dockerLogo from "./assets/Skills/docker-logo.png";
import ansibleLogo from "./assets/Skills/Ansible-logo.png";






export default function Skills() {
    return (
        <section id="skills" className="skills-section" >
            <h2 className="section-title">Compétences Techniques</h2>

            <div className="skills-container">
                <div className="skill-card" data-aos="fade-up">
                    <img src={htmlLogo} alt="HTML" />

                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={javascriptLogo} alt="Javascript" />

                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={CSSLogo} alt="CSS" />

                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={pythonLogo} alt="Python" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={javaLogo} alt="React" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={ReactLogo} alt="React" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={nodeLogo} alt="node" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={SpringLogo} alt="spring" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={fastapiLogo} alt="Angular" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={sqlLogo} alt="Python" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={mongoLogo} alt="Git" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={promLogo} alt="Git" />

                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={dockerLogo} alt="Git" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={ansibleLogo} alt="Git" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={gitLogo} alt="Git" />
                </div>
                <div className="skill-card" data-aos="fade-up">
                    <img src={gitLabLogo} alt="Git" />
                </div>
            </div>
        </section>
    );
}
