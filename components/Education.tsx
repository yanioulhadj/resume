export default function Education() {
  const educations = [
    {
      title: 'CFA INSTA – Paris 5, 1 mois en formation et 3 mois en entreprise.',
      level: 'BAC +5',
      description: 'Architecte informatique option Logiciel (Diplôme RNCP de niveau 1)',
      period: '2016 - 2018',
    },
    {
      title: 'IUT PARIS DESCARTES - Paris 16',
      level: 'BAC +3',
      description: 'Licence Professionnelle Informatique Génie Logiciel',
      period: '2015 - 2016',
    },
    {
      title: 'IUT PARIS DESCARTES - Paris 16',
      level: 'BAC +2',
      description: 'DUT Informatique Génie Logiciel',
      period: '2013 - 2015',
    },
    {
      title: 'Lycée Rosa Parks - Montgeron',
      level: 'BAC',
      description: 'BAC Scientifique spécialité ISN (Informatique et Sciences du Numérique)',
      period: '2012 - 2013',
    },
  ]

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-graduation-cap"></i> Etudes et formations
        </h2>
        {educations.map((edu, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{edu.title}</h3>
              <div className="subheading mb-3">{edu.level}</div>
              <div>{edu.description}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



