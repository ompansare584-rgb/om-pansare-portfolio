import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/site'
import NotFound from './NotFound'
import { useTitle } from '../hooks/useTitle'
export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)
  useTitle(p?.title)
  if (!p) return <NotFound />
  return (
    <article className="wrap prose">
      <Link to="/projects" className="back"><ArrowLeft size={16} /> Projects</Link>
      <p className="kicker">{p.category}</p><h1 className="display">{p.title}</h1><p className="lead">{p.overview || p.summary}</p>
      <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
      <p className="cta">{p.repo && <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">Repository</a>}{p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}</p>
      {p.image && <img src={p.image} alt={`Screenshot of ${p.title}`} />}
      {p.sections?.map(s => <section key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}
    </article>
  )
}
