import { now } from '../data/site'
import ListPage from '../components/ListPage'
export default function Now() {
  return <ListPage title="Now" kicker="Currently" lead="What I am working on, shared on my terms." items={now} emptyTitle="Nothing shared yet" emptyText="Current public activities will appear here." />
}
