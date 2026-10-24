import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [pathname])
}
