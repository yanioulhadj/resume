import { GITHUB_URL } from '@/data/projects'

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Yani
          <span className="text-primary">OULHADJ</span>
        </h1>
        <h3 className="mb-0">Développeur WEB et Mobile</h3>
        <div className="subheading mb-5">
          06 58 93 13 04 ·
          <a href="mailto:yani.o@hotmail.fr">yani.o@hotmail.fr</a>
        </div>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/yani-oulhadj-371342116/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}


