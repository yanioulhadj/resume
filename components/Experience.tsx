export default function Experience() {
  const experiences = [
    {
      title: 'Développeur Web et Mobile',
      contract: 'CDI',
      company: 'Johnpaul (Paris 3)',
      period: 'Janvier 2022 - Present',
      description:
        'HTML5, CSS3, VueJs, ReactJs, Cordova, React Native, Typescript, NodeJS (Backend for front-end), Gitlab (CI, Runner), Sonarqube, Sentry, Storybook, Jest, Zustand, Ant Design, SCRUM, Monorepo (yarn workspaces).',
    },
    {
      title: 'Développeur Web et Mobile (Android)',
      contract: 'Mission ESN',
      company: 'SNCF Réseau (La Plaine Saint-Denis)',
      period: 'Juin 2019 - Janvier 2022',
      description:
        'Développement Java (Framework Spring), Kotlin (Android, librairie JetPack), HTML5, CSS3, Javascript (VueJs), identification et cadrage des besoins métiers.',
    },
    {
      title: 'Développeur Front',
      contract: 'Mission ESN',
      company: 'TDF (Romainville)',
      period: 'Septembre 2018 - Avril 2019',
      description:
        'Développement Python (Framework Django), HTML5, CSS3, JavaScript (JQUERY), identification et cadrage des besoins métiers, conception des maquettes d\'interfaces graphiques, résolution des anomalies graphiques post-production, intégration des interfaces.',
    },
    {
      title: 'Chef de projet Web',
      contract: 'Alternance',
      company: 'IODE Ingénierie (Paris)',
      period: 'Septembre 2016 - Juillet 2018',
      description:
        'Développement PHP5/7, HTML5, CSS3, JavaScript (JQUERY), gestion de projet, correction de bugs.',
    },
    {
      title: 'Testeur Logiciel',
      contract: 'Stage',
      company: 'Planisware (Châtillon)',
      period: 'Mai 2016 - Septembre 2016',
      description:
        'Mise en place de tests, rédaction de spécifications fonctionnelles, automatisation de tests.',
    },
  ]

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-briefcase"></i> Expériences professionnelles
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{exp.title}</h3>
              <div className="subheading mb-3">
                <span className="text-primary">{exp.contract}</span> · {exp.company}
              </div>
              <p>{exp.description}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



