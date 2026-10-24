import { useEffect, useRef } from 'react'
// Pointer-driven 3D tilt. Skipped on touch devices and for reduced-motion users.
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave)
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) }
  }, [])
  return ref
}
