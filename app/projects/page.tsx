import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import { GITHUB_URL, projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projets - Yani OULHADJ',
  description: 'Projets personnels de Yani OULHADJ - Développeur Web et Mobile',
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <div className="container-fluid p-0">
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h2 className="mb-5">
              <i className="fas fa-code"></i> Projets
            </h2>
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-6 col-xl-4 mb-4" key={project.repoUrl}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title h5 mb-2">{project.name}</h3>
                      <p className="card-text flex-grow-1">{project.description}</p>
                      <div className="mb-3">
                        {project.technologies.map((tech) => (
                          <span className="badge badge-primary mr-1" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div>
                        <a
                          className="btn btn-sm btn-outline-primary mr-2"
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i> Code
                        </a>
                        {project.demoUrl && (
                          <a
                            className="btn btn-sm btn-primary"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt"></i> Démo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="btn btn-primary btn-lg mt-3"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> Voir tous mes projets sur GitHub
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
