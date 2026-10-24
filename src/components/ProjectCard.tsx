import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '../data/site'
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link to={`/projects/${p.slug}`} className="card reveal">
      {p.image && <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />}
      <span className="kicker">{p.category}</span><h3>{p.title} <ArrowUpRight size={18} /></h3><p>{p.summary}</p>
      <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
    </Link>
  )
}
