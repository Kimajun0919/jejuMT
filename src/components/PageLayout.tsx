import { Link } from 'react-router-dom'
import { type ReactNode, type CSSProperties } from 'react'
import { Navigation } from './Navigation'

type PageLayoutProps = {
  title: string
  subtitle?: string
  background: string
  accent: string
  badge?: string
  children: ReactNode
  ctaLabel?: string
  ctaTo?: string
}

export function PageLayout({
  title,
  subtitle,
  background,
  accent,
  badge,
  children,
  ctaLabel,
  ctaTo,
}: PageLayoutProps) {
  const accentStyle = { '--accent-color': accent } as CSSProperties
  const backdropImage = `linear-gradient(130deg, rgba(5, 12, 26, 0.7) 0%, rgba(5, 12, 26, 0.25) 40%, rgba(5, 12, 26, 0.7) 100%), url('${background}')`

  return (
    <div className="page" style={accentStyle}>
      <div className="page__backdrop" style={{ backgroundImage: backdropImage }} />
      <div className="page__glow" />
      <div className="page__content">
        <header className="page__header">
          {badge ? <span className="badge">{badge}</span> : null}
          <h1 className="page__title">{title}</h1>
          {subtitle ? <p className="page__subtitle">{subtitle}</p> : null}
        </header>
        <section className="page__card">
          {children}
          {ctaLabel && ctaTo ? (
            <div className="page__actions">
              <Link className="cta" to={ctaTo}>
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </section>
      </div>
      <Navigation />
    </div>
  )
}
