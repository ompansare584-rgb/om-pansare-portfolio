// ALL editable content lives here. Add only verified information.
export type Entry = { title: string; meta?: string; body?: string; href?: string }
export type Project = {
  slug: string; title: string; summary: string; category: string; tech: string[]; featured?: boolean
  image?: string; repo?: string; demo?: string; overview?: string
  sections?: { heading: string; body: string }[] // problem, decisions, challenges, verified results…
}
export const person = {
  name: 'Om Pansare',
  role: 'Computer Science student',
  motto: 'Quiet confidence. Visible work.',
  headline: 'Building with intent.',
  intro: 'I am a Computer Science student. This site grows as my published work does.',
  photo: 'images/om-pansare.jpg',
  photoAlt: 'Portrait of Om Pansare in a navy suit and blue tie',
  education: [] as Entry[], // e.g. { title: 'B.Tech Computer Science', meta: 'College · 2026–2030' }
  interests: [] as string[], // add only interests you want public
}
export const links = [
  { label: 'GitHub', href: 'https://github.com/ompansare584-rgb' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/om-pansare-934bb2301/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/ompansare_11' },
  { label: 'Email', href: 'mailto:ompansare584@gmail.com' },
]
export const email = 'ompansare584@gmail.com'
export const nav = [
  { to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' }, { to: '/experience', label: 'Experience' }, { to: '/contact', label: 'Contact' },
]
export const projects: Project[] = [] // add real projects here; each gets /projects/<slug>
export const skills: { group: string; items: string[] }[] = [] // e.g. { group: 'Programming', items: ['Python'] }
export const experience: Entry[] = []
export const achievements: Entry[] = []
export const journal: Entry[] = []
export const now: Entry[] = []
