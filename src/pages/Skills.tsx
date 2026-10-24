import { skills } from '../data/site'
import ListPage from '../components/ListPage'
export default function Skills() {
  return <ListPage title="Skills" kicker="Capabilities" lead="Only confirmed skills are listed — no percentages, no guesses."
    items={skills.map(s => ({ title: s.group, body: s.items.join(' · ') }))} emptyTitle="Skills will be listed once confirmed" emptyText="Add verified skills in src/data/site.ts." />
}
