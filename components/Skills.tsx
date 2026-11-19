export default function Skills() {
  const programmingLanguages = [
    'HTML5',
    'CSS3 (Bootstrap, Sass)',
    'Javascript (ReactJS, React native,VueJS, AngularJS, NodeJS, Jquery)',
    'Ant Design (React), Tailwind CSS, Material UI',
    'Java (Spring)',
    'Python (Django)',
    'PHP5/7 (Symfony)',
    'Kotlin (Android)',
    'Dart (Flutter)',
    'Suite ELK (Elasticsearch, Kibana, Logstash, Filebeat)',
  ]

  const databases = ['PostGreSQL', 'MySQL', 'Oracle', 'NoSQL']

  const software = ['Photoshop', 'Pack Office', 'VMWare', 'GIMP']

  const methodologies = [
    'Mobile-First, Responsive Design',
    'Tests cross-browser et débogage',
    'Développement Agile et SCRUM',
  ]

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-laptop"></i> Compétences
        </h2>
        <div className="subheading mb-3">
          Langage de programmation, frameworks et librairies
        </div>
        <ul className="fa-ul mb-0">
          {programmingLanguages.map((skill, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {skill}
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Base de données</div>
        <ul className="fa-ul mb-0">
          {databases.map((db, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {db}
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Logiciels</div>
        <ul className="fa-ul mb-0">
          {software.map((soft, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {soft}
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Méthodologies</div>
        <ul className="fa-ul mb-0">
          {methodologies.map((method, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {method}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}



