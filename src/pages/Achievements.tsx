import { achievements } from '../data/site'
import ListPage from '../components/ListPage'
export default function Achievements() {
  return <ListPage title="Achievements" kicker="Milestones" lead="Certificates, awards and results with verification links." items={achievements} emptyTitle="No achievements published yet" emptyText="Real certificates and results will be added here when available." />
}
