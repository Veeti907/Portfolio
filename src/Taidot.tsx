import './Taidot.css'
import { FaUsers, FaLightbulb, FaTools } from 'react-icons/fa'

const technicalSkills = [
  { name: 'React', level: 90 },
  { name: 'React-Native', level: 60 },
  { name: 'MySQL', level: 75 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'Lua', level: 30},
  { name: 'PHP', level: 75},
]

const softSkills = [
  { name: 'Tiimityö', icon: <FaUsers /> },
  { name: 'Viestintä', icon: <FaLightbulb /> },
  { name: 'Ongelmanratkaisu', icon: <FaTools /> },
  { name: 'Luovuus', icon: <FaLightbulb /> },
  { name: 'Johtajuus', icon: <FaUsers /> },
]

const otherSkills = [
  'Pelinkehitys',
  'UI/UX',
  'Projektinhallinta',
  'Design',
  'Käyttäjätuki',
]

export default function Taidot() {
  return (
    <section className="skills-page">
      <div className='skills-container'>
      <h1 className="skills-title">Taidot</h1>

      {/* Tekniset taidot */}
      <div className="skills-category">
        <h2>Tekniset taidot</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill, i) => (
            <div key={i} className="skill-card tech" data-level={skill.level}>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
            </div>
            
          ))}
        </div>
        </div>
      </div>

      {/* Sosiaaliset taidot */}
      <div className="skills-category">
        <h2 className='sosial-title'>Sosiaaliset taidot</h2>
        <div className="skills-grid soft">
          {softSkills.map((skill, i) => (
            <div key={i} className="skill-card soft">
              <div className="soft-icon">{skill.icon}</div>
              <h3 className='sosial-skills'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Muut taidot */}
      <div className="skills-category">
        <h2>Muut taidot</h2>
        <div className="skills-grid">
          {otherSkills.map((skill, i) => (
            <div key={i} className="skill-card other">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
