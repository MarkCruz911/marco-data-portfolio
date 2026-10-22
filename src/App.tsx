import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import YouTubeCaseStudy from './pages/YouTubeCaseStudy';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import { projects } from './data/projects';
export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const slug = hash.startsWith('#project/') ? hash.split('/')[1] : null;
  const project = projects.find((p) => p.slug === slug);
  useEffect(() => {
    const id = slug ? hash.split('/')[2] : hash.slice(1) || 'about';
    requestAnimationFrame(() => {
      if (id)
        document.getElementById(id)?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
        });
      else window.scrollTo(0, 0);
    });
    document.title = project
      ? `${project.title} | Marco Cruz`
      : 'Marco Cruz | Software Development & Data Analytics';
  }, [hash, slug, project]);
  return (
    <>
      <a
        className="skip-link"
        href={project ? '#project/' + project.slug + '/question' : '#about'}
      >
        Skip to content
      </a>
      <Header />
      {project ? (
        project.slug === 'youtube-shorts' ? (
          <YouTubeCaseStudy />
        ) : (
          <ProjectCaseStudy project={project} />
        )
      ) : slug ? (
        <main className="wrap section">
          <h1>Project not found.</h1>
          <a className="button dark" href="#projects">
            Explore projects
          </a>
        </main>
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}
