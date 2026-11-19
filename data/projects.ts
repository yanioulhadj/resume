export const GITHUB_URL = 'https://github.com/Eldii'

export type Project = {
  name: string
  description: string
  technologies: string[]
  repoUrl: string
  demoUrl?: string
}

// Ajouter / modifier les projets ici.
export const projects: Project[] = [
  {
    name: 'Resume VueJS',
    description: 'Version précédente de mon CV en ligne, développée avec VueJS.',
    technologies: ['VueJS', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/Eldii/resume-vuejs',
  },
  {
    name: 'Chronometer',
    description: 'Application Android de chronomètre.',
    technologies: ['Kotlin', 'Android'],
    repoUrl: 'https://github.com/Eldii/chronometer',
  },
  {
    name: 'Evil Ducks',
    description: 'Projet web front-end.',
    technologies: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/Eldii/evilducks',
  },
  {
    name: 'Symfony',
    description: 'Projet PHP réalisé avec le framework Symfony.',
    technologies: ['PHP', 'Symfony'],
    repoUrl: 'https://github.com/Eldii/Symfony',
  },
  {
    name: 'Test API',
    description: "Projet d'expérimentation autour d'une API.",
    technologies: ['API'],
    repoUrl: 'https://github.com/Eldii/testAPI',
  },
]
