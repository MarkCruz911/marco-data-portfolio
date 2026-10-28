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

function LongFormPreview() {
  const categories = [
    {
      name: 'Prepared Waters & Hydration',
      views: 37240,
      count: 27,
    },
    {
      name: 'Digestive Health',
      views: 37188.5,
      count: 12,
    },
    {
      name: 'Vitamins, Minerals & Other Supplements',
      views: 35967,
      count: 20,
    },
    {
      name: 'Coffee',
      views: 35880,
      count: 9,
    },
  ];

  const maximumViews = 40000;

  return (
    <div className="system-visual">
      <div>
        <BarChart3 size={22} />
        <span>LONG-FORM / MEDIAN VIEWS</span>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '18px',
          margin: '24px 0',
        }}
      >
        {categories.map((category, index) => (
          <div key={category.name}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '12px',
                marginBottom: '7px',
                fontSize: '12px',
              }}
            >
              <span>
                {category.name} · n={category.count}
              </span>

              <strong style={{ whiteSpace: 'nowrap' }}>
                {(category.views / 1000).toFixed(1)}K
              </strong>
            </div>

            <div
              aria-hidden="true"
              style={{
                height: '10px',
                borderRadius: '4px',
                background: 'rgba(148, 163, 184, 0.15)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${(category.views / maximumViews) * 100}%`,
                  height: '100%',
                  borderRadius: '4px',
                  background: index === 0 ? '#22d3ee' : '#a78bfa',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <small>
        Top four eligible categories · all publication years · minimum 5
        videos per category · bar scale: 0–40K views
      </small>
    </div>
  );
}

function PharmacyPreview() {
  return (
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
  );
}

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

        <span className="section-index">
          {String(projects.length).padStart(2, '0')} CASE STUDIES / MORE TO COME
        </span>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-feature" key={project.slug}>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-stats">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <Tags items={project.tools} />

              <div className="project-actions">
                <a
                  href={`#project/${project.slug}`}
                  className="button dark"
                >
                  Read case study <ArrowUpRight size={17} />
                </a>

                {project.slug === 'youtube-shorts' && (
                  <Out className="button outline" href={links.tableau}>
                    <BarChart3 size={16} /> Explore Tableau
                  </Out>
                )}

                {project.slug === 'youtube-long-form' && (
                  <Out
                    className="button outline"
                    href="https://public.tableau.com/views/YouTubeLongFormPerformanceAnalysis/YouTubeLongKeyFinding?%3AshowVizHome=no#2"
                  >
                    <BarChart3 size={16} /> Explore Tableau
                  </Out>
                )}
              </div>
            </div>

            <div className="project-visual">
              {project.slug === 'youtube-shorts' && <MiniBars />}

              {project.slug === 'youtube-long-form' && <LongFormPreview />}

              {project.slug === 'pharmacy-platform' && <PharmacyPreview />}

              <div className="story-steps">
                {['Question', 'Analysis', 'Findings', 'Deliverables'].map(
                  (step, index) => (
                    <div key={step}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </div>
                  ),
                )}
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