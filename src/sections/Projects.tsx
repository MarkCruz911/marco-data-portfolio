import {
  ArrowUpRight,
  ArrowRight,
  BarChart3,
  Boxes,
  Users,
  Package,
  Database,
} from 'lucide-react';
import { projects } from '../data/projects';
import { links } from '../data/profile';
import { Label, Out, Tags } from '../components/UI';
import { MiniBars } from '../components/DataVisual';
export default function Projects() {
  return (
    <section id="projects" className="section wrap">
      <div className="section-heading">
        <div>
          <Label>SELECTED PROJECTS</Label>
          <h2>
            The question. The evidence.
            <br />
            <span>The outcome.</span>
          </h2>
        </div>
        <span className="section-index">02 CASE STUDIES / MORE TO COME</span>
      </div>
      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-feature" key={p.slug}>
            <div className="project-copy">
              <div className="project-meta">
                <span>{p.category}</span>
                <span>{p.number}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-stats">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <Tags items={p.tools} />
              <div className="project-actions">
                <a href={'#project/' + p.slug} className="button dark">
                  Read case study <ArrowUpRight size={17} />
                </a>
                {p.slug === 'youtube-shorts' && (
                  <Out className="button outline" href={links.tableau}>
                    <BarChart3 size={16} /> Explore Tableau
                  </Out>
                )}
              </div>
            </div>
            <div className="project-visual">
              {p.slug === 'youtube-shorts' ? (
                <MiniBars />
              ) : (
                <div className="system-visual">
                  <div>
                    <Database size={22} />
                    <span>PHARMACY / OPERATIONS</span>
                  </div>
                  <div className="system-modules">
                    <span>
                      <Package />
                      Inventory
                    </span>
                    <span>
                      <Users />
                      Customers
                    </span>
                    <span>
                      <BarChart3 />
                      Business KPIs
                    </span>
                    <span>
                      <Boxes />
                      K-Means groups
                    </span>
                  </div>
                  <small>
                    Conceptual system overview · not an application screenshot
                  </small>
                </div>
              )}
              <div className="story-steps">
                {['Question', 'Analysis', 'Findings', 'Deliverables'].map((s, i) => (
                  <div key={s}>
                    <span>{i + 1}</span>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="work-note">
        <p>Explore the implementation and ongoing work.</p>
        <Out href={links.github}>
          GitHub <ArrowRight size={16} />
        </Out>
      </div>
    </section>
  );
}
