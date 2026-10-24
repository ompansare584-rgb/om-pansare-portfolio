import { experience } from '../data/site'
import ListPage from '../components/ListPage'
export default function Experience() {
  return <ListPage title="Experience" kicker="Activities" lead="College activities, clubs, hackathons and team work — verified only." items={experience} emptyTitle="Nothing to show yet" emptyText="Verified activities will appear here as a timeline." />
}
