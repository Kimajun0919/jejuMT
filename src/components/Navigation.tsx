import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { navItems } from '../navItems'

export function Navigation() {
  const location = useLocation()
  const normalize = (path: string) =>
    path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path
  const currentPath = normalize(location.pathname)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const activeRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const el = activeRef.current
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [currentPath])

  return (
    <nav className="nav-bar" aria-label="페이지 이동" ref={containerRef}>
      {navItems.map((item) => {
        const isActive = currentPath === item.path
        return (
          <NavLink
            key={item.path}
            to={item.path}
            ref={isActive ? activeRef : null}
            className={`nav-pill ${isActive ? 'is-active' : ''}`}
          >
            <span className="nav-dot" aria-hidden="true" />
            {item.label}
          </NavLink>
        )
      })}
    </nav>
  )
}
