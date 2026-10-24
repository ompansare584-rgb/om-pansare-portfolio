import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { nav, links, person } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light')
  const { pathname } = useLocation()
  useReveal()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  const toggle = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t); document.documentElement.dataset.theme = t
    try { localStorage.setItem('theme', t) } catch { /* ignore */ }
  }
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="bar">
        <Link to="/" className="mark" aria-label="Om Pansare — home">Om Pansare</Link>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Primary">
          {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
        </nav>
        <div className="tools">
          <button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav" aria-label="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>
      <main id="main" key={pathname} className="page"><Outlet /></main>
      <footer className="foot">
        <div><strong>{person.name}</strong><p>{person.motto}</p></div>
        <ul>{links.map(l => <li key={l.label}><a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a></li>)}</ul>
      </footer>
    </>
  )
}
