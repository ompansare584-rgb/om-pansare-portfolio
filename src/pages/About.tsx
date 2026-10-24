import { person } from '../data/site'
import ListPage from '../components/ListPage'
import Empty from '../components/Empty'
import { useTitle } from '../hooks/useTitle'
export default function About() {
  useTitle('About')
  return (
    <>
      <section className="wrap about">
        <div><p className="kicker">About</p><h1 className="display">{person.motto}</h1><p className="lead">{person.intro}</p></div>
        <img className="portrait-sm" src={`${import.meta.env.BASE_URL}${person.photo}`} alt={person.photoAlt} width={720} height={900} loading="lazy" />
      </section>
      <section className="wrap"><h2>Interests</h2>
        {person.interests.length ? <ul className="tags">{person.interests.map(i => <li key={i}>{i}</li>)}</ul> : <Empty title="Interests will appear here" text="Add them in src/data/site.ts when you are ready to share them." />}</section>
      <ListPage title="Education" kicker="Background" lead="" items={person.education} emptyTitle="Education details pending" emptyText="College and graduation year will be added once confirmed." />
    </>
  )
}
