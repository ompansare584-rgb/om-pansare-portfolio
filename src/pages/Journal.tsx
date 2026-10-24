import { journal } from '../data/site'
import ListPage from '../components/ListPage'
export default function Journal() {
  return <ListPage title="Journal" kicker="Writing" lead="Technical notes, when there is something worth writing." items={journal} emptyTitle="No articles yet" emptyText="The first post will appear here." />
}
