import { Link } from 'react-router-dom'
export default function Empty({ title, text, cta }: { title: string; text: string; cta?: { to: string; label: string } }) {
  return (
    <div className="empty reveal">
      <svg viewBox="0 0 80 80" aria-hidden="true"><rect x="8" y="8" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" /><circle cx="52" cy="28" r="14" fill="var(--accent)" /></svg>
      <h3>{title}</h3><p>{text}</p>
      {cta && <Link className="btn ghost" to={cta.to}>{cta.label}</Link>}
    </div>
  )
}
