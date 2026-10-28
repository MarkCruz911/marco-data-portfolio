import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import YouTubeCaseStudy from './pages/YouTubeCaseStudy';
import YouTubeLongFormCaseStudy from './pages/YouTubeLongFormCaseStudy';
import ProjectCaseStudy from './pages/ProjectCaseStudy';

import { projects } from './data/projects';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const update = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', update);

    return () => {
      window.removeEventListener('hashchange', update);
    };
  }, []);

  const slug = hash.startsWith('#project/')
    ? hash.split('/')[1]
    : null;

  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    const sectionId = slug
      ? hash.split('/')[2]
      : hash.slice(1) || 'about';

    const frameId = requestAnimationFrame(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: window.matchMedia(
            '(prefers-reduced-motion: reduce)',
          ).matches
            ? 'instant'
            : 'smooth',
        });
      } else {
        window.scrollTo(0, 0);
      }
    });

    document.title = project
      ? `${project.title} | Marco Cruz`
      : 'Marco Cruz | Software Development & Data Analytics';

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [hash, slug, project]);

  function renderPage() {
    if (project) {
      if (project.slug === 'youtube-shorts') {
        return <YouTubeCaseStudy />;
      }

      if (project.slug === 'youtube-long-form') {
        return <YouTubeLongFormCaseStudy />;
      }

      return <ProjectCaseStudy project={project} />;
    }

    if (slug) {
      return (
        <main className="wrap section">
          <h1>Project not found.</h1>

          <a className="button dark" href="#projects">
            Explore projects
          </a>
        </main>
      );
    }

    return <Home />;
  }

  return (
    <>
      <a
        className="skip-link"
        href={
          project
            ? `#project/${project.slug}/question`
            : '#about'
        }
      >
        Skip to content
      </a>

      <Header />

      {renderPage()}

      <Footer />
    </>
  );
}