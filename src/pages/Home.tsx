import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { person, links, projects, skills } from '../data/site'
import ProjectCard from '../components/ProjectCard'
import Empty from '../components/Empty'
import { useTitle } from '../hooks/useTitle'
const icons: Record<string, JSX.Element> = { GitHub: <Github size={18} />, LinkedIn: <Linkedin size={18} />, LeetCode: <Code2 size={18} />, Email: <Mail size={18} /> }
export default function Home() {
  useTitle()
  const featured = projects.filter(p => p.featured).slice(0, 3)
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="kicker">{person.role}</p>
          <h1 className="display">{person.name}<span>{person.headline}</span></h1>
          <p className="lead">{person.intro}</p>
          <div className="cta">
            <Link className="btn" to="/projects">View projects <ArrowRight size={18} /></Link>
            <Link className="btn ghost" to="/about">About me</Link>
          </div>
          <ul className="social">{links.map(l => <li key={l.label}><a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={l.label}>{icons[l.label]}<span>{l.label}</span></a></li>)}</ul>
        </div>
        <figure className="portrait">
          <img src={`${import.meta.env.BASE_URL}${person.photo}`} alt={person.photoAlt} width={720} height={900} />
          <figcaption>{person.motto}</figcaption>
        </figure>
      </section>
      <section className="wrap">
        <div className="row"><h2>Selected work</h2><Link to="/projects">All projects</Link></div>
        {featured.length ? <div className="grid">{featured.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
          : <Empty title="Projects are on their way" text="Nothing is published until it is real. Check my GitHub in the meantime." cta={{ to: '/contact', label: 'Get in touch' }} />}
      </section>
      {skills.length > 0 && <section className="wrap"><h2>Skills</h2><div className="grid">{skills.map(s => <div key={s.group} className="card reveal"><h3>{s.group}</h3><p>{s.items.join(' · ')}</p></div>)}</div></section>}
      <section className="wrap invite reveal"><h2>Let’s connect.</h2><p className="lead">Recruiters, club coordinators and fellow developers are welcome to reach out.</p><Link className="btn" to="/contact">Contact</Link></section>
    </>
  )
}
