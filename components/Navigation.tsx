'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'interests']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Fermer le menu mobile si ouvert (Bootstrap 4)
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
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a
        className="navbar-brand"
        href="#page-top"
        onClick={(e) => handleClick(e, '#page-top')}
      >
        <span className="d-block d-lg-none">Yani OULHADJ</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/assets/img/0.jpg"
            alt=""
          />
        </span>
      </a>
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
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
            >
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              href="#experience"
              onClick={(e) => handleClick(e, '#experience')}
            >
              Expériences
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              href="#education"
              onClick={(e) => handleClick(e, '#education')}
            >
              Etudes
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              href="#skills"
              onClick={(e) => handleClick(e, '#skills')}
            >
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === 'interests' ? 'active' : ''}`}
              href="#interests"
              onClick={(e) => handleClick(e, '#interests')}
            >
              Centres d&apos;intérêt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

