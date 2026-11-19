export default function Skills() {
  const programmingLanguages = [
    'HTML5',
    'CSS3 (Bootstrap, Sass)',
    'Javascript / TypeScript (ReactJS, VueJS, AngularJS, NodeJS, Jquery)',
    'Mobile : React Native, Android (Kotlin, Java), Swift, Dart (Flutter)',
    'Storybook, Jest, Zustand',
    'Ant Design (React), Tailwind CSS, Material UI',
    'Java (Spring)',
    'Python (Django)',
    'PHP5/7 (Symfony)',
    'Suite ELK (Elasticsearch, Kibana, Logstash, Filebeat)',
  ]

  const databases = ['PostGreSQL', 'MySQL', 'Oracle', 'MongoDB', 'NoSQL']

  const software = ['Photoshop', 'Pack Office', 'VMWare', 'GIMP']

  const operatingSystems = ['Linux', 'Windows', 'MacOS']

  const methodologies = [
    'Mobile-First, Responsive Design',
    'Tests cross-browser et débogage',
    'Développement Agile (SCRUM, KANBAN)',
    'Gestion de projet',
    'Programmation Orientée Objet (JS, PHP, Java)',
  ]

  const languages = ['Anglais (TOEIC niveau B1)', 'Espagnol (niveau scolaire)']

  const renderList = (items: string[]) => (
    <ul className="fa-ul mb-0">
      {items.map((item) => (
        <li key={item}>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-laptop"></i> Compétences
        </h2>
        <div className="subheading mb-3">
          Langage de programmation, frameworks et librairies
        </div>
        {renderList(programmingLanguages)}
        <div className="subheading mb-3">Base de données</div>
        {renderList(databases)}
        <div className="subheading mb-3">Systèmes d&apos;exploitation</div>
        {renderList(operatingSystems)}
        <div className="subheading mb-3">Logiciels</div>
        {renderList(software)}
        <div className="subheading mb-3">Méthodologies</div>
        {renderList(methodologies)}
        <div className="subheading mb-3">Langues</div>
        {renderList(languages)}
      </div>
    </section>
  )
}



