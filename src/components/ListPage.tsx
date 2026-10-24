import { Entry } from '../data/site'
import Empty from './Empty'
import { useTitle } from '../hooks/useTitle'
type P = { title: string; kicker: string; lead: string; items: Entry[]; emptyTitle: string; emptyText: string }
export default function ListPage({ title, kicker, lead, items, emptyTitle, emptyText }: P) {
  useTitle(title)
  return (
    <section className="wrap">
      <p className="kicker">{kicker}</p><h1 className="display">{title}</h1><p className="lead">{lead}</p>
      {items.length === 0 ? <Empty title={emptyTitle} text={emptyText} /> : (
        <ol className="timeline">{items.map(i => (
          <li key={i.title} className="reveal"><span>{i.meta}</span><div><h3>{i.href ? <a href={i.href} target="_blank" rel="noreferrer">{i.title}</a> : i.title}</h3>{i.body && <p>{i.body}</p>}</div></li>
        ))}</ol>
      )}
    </section>
  )
}
