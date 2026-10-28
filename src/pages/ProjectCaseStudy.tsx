import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { Label, Tags } from '../components/UI';
export default function ProjectCaseStudy({ project }: { project: Project }) {
  const c = project.caseStudy!;
  return (
    <main className="wrap generic-case">
      <a href="#projects" className="text-link">
        <ArrowLeft size={16} /> All projects
      </a>
      <Label>{project.category}</Label>
      <h1>{project.title}</h1>
      <p className="lead">{c.question}</p>

      <Tags items={project.tools} />
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          className="button dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore code and analysis <ArrowUpRight size={17} />
        </a>
      )}
      <div className="case-kpis">
        {project.stats.map((s) => (
          <div key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="generic-body">
        <section id="question">
          <Label>01 / THE OBJECTIVE</Label>
          <h2>Bring operations and insight together.</h2>
          <p>{c.objective}</p>
          <h3>Data context</h3>
          <p>{c.data}</p>
        </section>
        {[
          { label: '02 / THE PROCESS', title: 'What I built.', items: c.process },
          {
            label: '03 / THE FINDINGS',
            title: 'What the system makes visible.',
            items: c.findings,
          },
          {
            label: '04 / THE DELIVERABLES',
            title: 'What was delivered.',
            items: c.deliverables,
          },
          {
            label: '05 / LIMITATIONS',
            title: 'What is not established here.',
            items: c.limitations,
          },
          {
            label: '06 / NEXT STEPS',
            title: 'Make the evidence easier to explore.',
            items: c.next,
          },
        ].map((s) => (
          <section key={s.label}>
            <Label>{s.label}</Label>
            <h2>{s.title}</h2>
            <ul>
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
        <a href="#contact" className="button dark">
          Discuss this project <ArrowUpRight size={17} />
        </a>
      </div>
    </main>
  );
}
