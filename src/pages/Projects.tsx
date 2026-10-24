import { projects } from '../data/site'
import ProjectCard from '../components/ProjectCard'
import Empty from '../components/Empty'
import { useTitle } from '../hooks/useTitle'
export default function Projects() {
  useTitle('Projects')
  return (
    <section className="wrap">
      <p className="kicker">Projects</p><h1 className="display">Visible work.</h1>
      <p className="lead">Real projects only, each with its own write-up once published.</p>
      {projects.length ? <div className="grid">{projects.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
        : <Empty title="No projects published yet" text="This gallery is ready for screenshots, tech tags, repository and demo links. The first project will appear here." />}
    </section>
  )
}
