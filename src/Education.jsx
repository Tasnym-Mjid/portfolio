import "./Education.css";
import enitLogo from "./assets/ENIT-logo.png";
import prepaLogo from "./assets/ipeit-logo.jpg";

export default function Education() {
    return (
        <section id="education" className="education-section" >
            <h2 className="education-title">Parcours Académique</h2>

            <div className="education-container">

                <div className="education-card" data-aos="fade-right" >
                    <h3>Baccalauréat en Sciences Expérimental</h3>
                    <p className="education-year">2019 – 2020</p>
                    <p className="education-school">Lycée Manzel Jemil, Bizerte</p>
                </div>
                <div className="education-card" data-aos="fade-right">
                    <h3>Cycle préparatoire </h3>
                    <p className="education-year">2020 – 2022</p>
                    <div className="education-school">
                        <img src={prepaLogo} alt="Préparatoire" className="school-logo" />
                        <span>Institut Préparatoire aux études d'Ingenieur de Tunis (IPEIT)</span>

                    </div>
                    <p className="education-desc">
                        Section : Physique-Chimie(PC)
                    </p>
                </div>
                <div className="education-card" data-aos="fade-right">
                    <h3>Cycle Ingénieur</h3>
                    <p className="education-year">2022 – 2025</p>
                    <div className="education-school">
                        <img src={enitLogo} alt="ENIT" className="school-logo" />
                        <span>École Nationale d’Ingénieurs de Tunis (ENIT)</span>
                    </div>

                    <p className="education-desc">
                        Spécialisation : Informatique , Génie Logiciel<br />                    </p>
                </div>




            </div>
        </section>
    );
}