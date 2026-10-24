import { FormEvent } from 'react'
import { links, email } from '../data/site'
import { useTitle } from '../hooks/useTitle'
export default function Contact() {
  useTitle('Contact')
  // No backend: this opens the visitor's email app. Nothing is "sent" by the site itself.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\n— ${f.get('name')}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(body)}`
  }
  return (
    <section className="wrap contact">
      <div><p className="kicker">Contact</p><h1 className="display">Say hello.</h1>
        <p className="lead">Internships, club recruitment, collaboration or a quick chat — I’d like to hear from you.</p>
        <ul className="plain">{links.map(l => <li key={l.label}><a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a><span>{l.label === 'Email' ? email : l.href.replace(/^https?:\/\/(www\.)?/, '')}</span></li>)}</ul></div>
      <form onSubmit={submit}>
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Message<textarea name="message" rows={6} required /></label>
        <button className="btn" type="submit">Open in email app</button>
        <small>This opens your email app with the message prepared; you press send there.</small>
      </form>
    </section>
  )
}
