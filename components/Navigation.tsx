'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expériences' },
  { id: 'education', label: 'Etudes' },
  { id: 'skills', label: 'Compétences' },
  { id: 'interests', label: "Centres d'intérêt" },
]

const closeMobileMenu = () => {
  const navbar = document.getElementById('navbarSupportedContent')
  if (navbar && navbar.classList.contains('show')) {
    // Utiliser jQuery pour fermer le menu Bootstrap 4
    const { $ } = window as Window & {
      $?: (selector: string) => { collapse: (action: string) => void }
    }
    if ($) {
      $('#navbarSupportedContent').collapse('hide')
    } else {
      navbar.classList.remove('show')
    }
  }
}

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const { id } of sections) {
        const element = document.getElementById(id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Sur la page d'accueil : scroll fluide vers la section.
  // Sur les autres pages : navigation classique vers /#section.
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) {
      closeMobileMenu()
      return
    }
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    closeMobileMenu()
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link
        className="navbar-brand"
        href="/#page-top"
        onClick={(e) => handleSectionClick(e, 'page-top')}
      >
        <span className="d-block d-lg-none">Yani OULHADJ</span>
        <span className="d-none d-lg-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/assets/img/0.jpg"
            alt="Yani OULHADJ"
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {sections.map(({ id, label }) => (
            <li className="nav-item" key={id}>
              <Link
                className={`nav-link ${isHome && activeSection === id ? 'active' : ''}`}
                href={`/#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link
              className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}
              href="/projects"
              onClick={closeMobileMenu}
            >
              Projets
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
