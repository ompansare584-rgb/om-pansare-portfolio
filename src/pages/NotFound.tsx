import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="wrap"><p className="kicker">404</p><h1 className="display">This page doesn’t exist.</h1>
      <p className="lead">Try one of these instead.</p>
      <p className="cta"><Link className="btn" to="/">Home</Link><Link className="btn ghost" to="/about">About</Link><Link className="btn ghost" to="/projects">Projects</Link><Link className="btn ghost" to="/contact">Contact</Link></p></section>
  )
}
