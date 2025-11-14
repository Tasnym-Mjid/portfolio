import "./About.css";

export default function About() {

    return (
        <section id="about" className="about-section" data-aos="fade-right">
            <h2 className="about-title">À propos de moi</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Je suis <strong>Tasnim Mjid</strong>, ingénieure en informatique fraîchement diplômée,
                        passionnée par le développement logicielle , l’automatisation et les technologies innovantes.
                        J’aime créer des solutions qui allient performance, simplicité et esthétique.
                    </p>
                    <p>
                        Durant mes expériences, j’ai travaillé sur des projets liant <strong>Développement fullstack</strong>, <strong>DevOps</strong>,
                        <strong>IA</strong> et <strong>automatisation</strong>, en utilisant des outils modernes
                        et des approches orientées qualité et performance.
                    </p>
                </div>
            </div>
        </section>

    );
}