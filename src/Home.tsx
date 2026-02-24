import './home.css'
import { useNavigate } from 'react-router-dom'
import Content from './Etusivuncontent'

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="home-section">

      {/* Hero */}
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Veeti Balk</h1>
          <p className="hero-subtitle">
            Tieto- ja viestintätekniikan opiskelija | Ohjelmointi & Pelinkehitys
          </p>

          <div className="hero-buttons">
            <button className="btn primary" onClick={() => navigate('/projektit')}>
              Katso projektit
            </button>
            <button className="btn secondary" onClick={() => navigate('/contact')}>
              Ota yhteyttä
            </button>
          </div>
        </div>

        {/* Profiilikuva */}
        <div className="hero-image">
          <img src="/Portfolio_kuva.jpg" alt="Veeti Balk" />
        </div>
      </div>

      {/* About / lyhyt esittely */}
      <div className="about-card">
        <Content />
      </div>

    </section>
  )
}
