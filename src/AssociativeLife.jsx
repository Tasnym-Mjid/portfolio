import "./AssociativeLife.css";
import robotic1 from "./assets/Robotic1.jpg";
import robotic2 from "./assets/Robotic2.jpg";
import robotic3 from "./assets/Robotic3.jpg";
import robotic4 from "./assets/Robotic4.jpg";

export default function AssociativeLife() {
    return (
        <section id="associative-life" className="associative-section" >
            <h2 className="associative-title">Vie Associative</h2>

            <div className="associative-container">

                {/* Carte 1 */}
                <div className="asso-card" data-aos="zoom-in-up">
                    <h3>Membre actif du Club Robotique de l’ENIT <br />Depuis 2022</h3>
                    <div className="asso-images">
                        <img src={robotic1} alt="Club Robotique ENIT" />
                        <img src={robotic2} alt="Compétition robotique" />
                    </div>
                    <p>
                        En tant que membre actif du Club Robotique de l’ENIT, j’ai participé à
                        plusieurs projets, ateliers et compétitions dans le domaine de la robotique.
                    </p>
                </div>

                {/* Carte 2 */}
                <div className="asso-card" data-aos="zoom-in-up">
                    <h3>Responsable Média du CR_ENIT <br />Année 2023/2024</h3>
                    <div className="asso-images">
                        <img src={robotic3} alt="Responsable média" />
                        <img src={robotic4} alt="Présentation CR_ENIT" />
                    </div>
                    <p>
                        En tant que responsable média, j’étais chargée de la communication et de la
                        promotion du club. Cela incluait la création et le partage de contenu sur
                        différentes plateformes pour mettre en valeur nos activités, événements et réalisations.
                    </p>
                </div>

            </div>
        </section>
    );
}
