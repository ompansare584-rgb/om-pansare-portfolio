import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const cssVar = (v: string, fallback: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim() || fallback
const hasWebGL = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false } }

function useColors() {
  const [c, set] = useState({ fg: '#1c1b19', accent: '#2740d9' })
  useEffect(() => {
    const read = () => set({ fg: cssVar('--fg', '#1c1b19'), accent: cssVar('--accent', '#2740d9') })
    read()
    const mo = new MutationObserver(read)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => mo.disconnect()
  }, [])
  return c
}

const shards: [number, number, number][] = [[-2.6, 1.2, 0.5], [2.8, -0.9, 0.8], [0.4, 2.7, -0.6], [-1.2, -2.4, 1], [2.2, 2, -1]]

function Rig({ fg, accent, still }: { fg: string; accent: string; still: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const core = useRef<THREE.Mesh>(null!)
  const ring = useRef<THREE.Mesh>(null!)
  const ptr = useRef({ x: 0, y: 0 })
  const { size } = useThree()
  const wide = size.width > 820
  useEffect(() => {
    const m = (e: PointerEvent) => { ptr.current.x = (e.clientX / window.innerWidth) * 2 - 1; ptr.current.y = (e.clientY / window.innerHeight) * 2 - 1 }
    window.addEventListener('pointermove', m)
    return () => window.removeEventListener('pointermove', m)
  }, [])
  useFrame((_, dt) => {
    if (still) return
    const g = group.current, y = window.scrollY
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, ptr.current.x * 0.6 + y * 0.002, 3, dt)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, ptr.current.y * 0.4, 3, dt)
    g.position.y = y * 0.004
    core.current.rotation.x += dt * 0.25
    core.current.rotation.y += dt * 0.35
    ring.current.rotation.z += dt * 0.15
  })
  return (
    <group ref={group} position={[wide ? 2.4 : 0, 0, 0]} scale={wide ? 1 : 0.72}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <mesh><icosahedronGeometry args={[2.2, 1]} /><meshBasicMaterial color={fg} wireframe transparent opacity={0.3} /></mesh>
      <mesh ref={core}><dodecahedronGeometry args={[0.9]} /><meshStandardMaterial color={accent} flatShading roughness={0.4} /></mesh>
      <mesh ref={ring} rotation={[1.1, 0.3, 0]}><torusGeometry args={[1.6, 0.02, 16, 120]} /><meshBasicMaterial color={accent} /></mesh>
      {shards.map((p, i) => <mesh key={i} position={p} rotation={[i, i * 2, 0]}><octahedronGeometry args={[0.18]} /><meshStandardMaterial color={i % 2 ? accent : fg} flatShading /></mesh>)}
    </group>
  )
}

export default function Scene3D() {
  const box = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [ok] = useState(hasWebGL)
  const colors = useColors()
  const still = useMemo(() => matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  useEffect(() => {
    if (!box.current) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    io.observe(box.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={box} className="scene" aria-hidden="true">
      {ok && (
        <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 7], fov: 45 }} frameloop={visible && !still ? 'always' : 'demand'} gl={{ antialias: true, powerPreference: 'low-power' }}>
          <Rig fg={colors.fg} accent={colors.accent} still={still} />
        </Canvas>
      )}
    </div>
  )
}
