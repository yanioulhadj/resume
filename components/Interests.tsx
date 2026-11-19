export default function Interests() {
  const interests = [
    { icon: 'fas fa-futbol', text: 'Football' },
    { icon: 'fas fa-dumbbell', text: 'Musculation' },
    { icon: 'fas fa-running', text: 'Course à pied' },
    { icon: 'fas fa-swimmer', text: 'Natation' },
    { icon: 'fas fa-brain', text: 'Veille technologique' },
    { icon: 'fas fa-book', text: 'Manga' },
    { icon: 'fas fa-chess', text: 'Jeu d\'échecs' },
    { icon: 'fas fa-globe', text: 'Voyages' },
    { icon: 'fas fa-gamepad', text: 'Jeux vidéo' },
  ]

  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-dice"></i> Centres d&apos;intérêt
        </h2>
        <ul className="fa-ul mb-0">
          {interests.map((interest, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className={interest.icon}></i>
              </span>
              {interest.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}



