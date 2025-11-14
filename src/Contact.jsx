import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section" data-aos="fade-up">
            <h2 className="contact-title">Contact</h2>

            <p className="contact-text">
                Vous pouvez me joindre facilement via les canaux ci-dessous.
                N’hésitez pas à me contacter pour toute opportunité ou collaboration.
            </p>

            <div className="contact-cards">
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:tasnimmjid@gmail.com">tasnim.mjid.2000@gmail.com</a>
                </div>

                <div className="contact-card">
                    <FaPhone className="contact-icon" />
                    <span>+216 22 158 041</span>
                </div>

                <div className="contact-card">
                    <FaLinkedin className="contact-icon" />
                    <a
                        href="https://www.linkedin.com/in/tasnim-mjid-836b1a289/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        tasnim-mjid
                    </a>
                </div>

                <div className="contact-card">
                    <FaGithub className="contact-icon" />
                    <a
                        href="https://github.com/Tasnym-Mjid"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tasnym-mjid
                    </a>
                </div>
            </div>
        </section>
    );
}
