import './Etusivuncontent.css';

function Content() {
  return (
    <div className="content-container-etusivu">
      {/* Kuva Navbarin ja About Me:n välissä */}
      <div className="header-image-container">
        <img src="/Portfolio_kuva.jpg" alt="Veeti Balk" className="header-image" />
      </div>

      {/* About Me teksti */}
      <div className="about-text">
        <p>
          Nimeni on Veeti Balk ja opiskelen tieto- ja viestintätekniikkaa Kaukovainion OSAO:lla. 
          Olen kiinnostunut erityisesti ohjelmoinnista ja pelinkehityksestä. Tavoitteenani on työllistyä alalle valmistumisen jälkeen.
          Olen intohimoinen koodaari ja nautin uusien teknologioiden oppimisesta. Vapaa-ajallani harrastan pelaamista, musiikin kuuntelua ja ulkoilua.
          Tykkään ratkoa uusia ongelmia ja kehittää itseäni jatkuvasti ohjelmoinnin saralla.
        </p>
      </div>
    </div>
  );
}

export default Content;
