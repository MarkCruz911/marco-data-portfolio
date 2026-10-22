import { BriefcaseBusiness, ChevronDown, Check } from 'lucide-react';
import { experience } from '../data/experience';
import { Label, Tags } from '../components/UI';
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="wrap section">
        <Label>EXPERIENCE</Label>
        <h2>
          Building solutions across
          <br />
          data, software, and business.
        </h2>
        <div className="experience-timeline">
          {experience.map((job, i) => (
            <article className="job" key={job.company}>
              <div className="timeline-date">
                <i />
                {job.period}
              </div>
              <div className="job-heading">
                <BriefcaseBusiness />
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                  <small>{job.location}</small>
                </div>
              </div>
              <div className="job-content">
                <p>{job.context}</p>
                <details open={i === 0}>
                  <summary>
                    Responsibilities & contributions <ChevronDown size={16} />
                  </summary>
                  <ul>
                    {job.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <div className="outcomes">
                    {job.outcomes.map((r) => (
                      <p key={r}>
                        <Check size={16} />
                        {r}
                      </p>
                    ))}
                  </div>
                  <Tags items={job.tools} />
                </details>
              </div>
            </article>
          ))}
        </div>
        <p className="small muted">
          Business results reflect contributions to team initiatives. They are separate
          from the exported dataset analyzed in the YouTube portfolio project.
        </p>
      </div>
    </section>
  );
}
