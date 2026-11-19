export const GITHUB_URL = 'https://github.com/yanioulhadj'

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
    name: 'Poker Planning',
    description:
      "Application web de Poker Planning permettant aux équipes Agile d'estimer collaborativement la complexité des tâches lors des sprint plannings.",
    technologies: ['Next.js', 'React', 'TypeScript', 'NextAuth', 'Redis'],
    repoUrl: 'https://github.com/yanioulhadj/poker-planning',
    demoUrl: 'https://poker-planning-lac.vercel.app',
  },
  {
    name: 'Pomoflow',
    description:
      'Application web pour travailler avec la méthode Pomodoro : minuteur focus / pauses, enchaînement automatique des sessions et liste de tâches.',
    technologies: ['React', 'TypeScript'],
    repoUrl: 'https://github.com/yanioulhadj/pomoflow',
  },
  {
    name: 'Resume',
    description: 'Ce CV en ligne, développé avec Next.js, React et TypeScript.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/yanioulhadj/resume',
  },
]
