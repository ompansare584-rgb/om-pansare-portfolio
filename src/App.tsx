import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Skills = lazy(() => import('./pages/Skills'))
const Experience = lazy(() => import('./pages/Experience'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Journal = lazy(() => import('./pages/Journal'))
const Now = lazy(() => import('./pages/Now'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="journal" element={<Journal />} />
          <Route path="now" element={<Now />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
