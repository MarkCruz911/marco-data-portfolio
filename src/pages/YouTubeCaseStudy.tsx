import { useState } from 'react';
import {
  BarChart3,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Database,
  FileText,
  Code2,
  Download,
  Plus,
  Minus,
  Check,
} from 'lucide-react';
import { links } from '../data/profile';
import { Out, Label } from '../components/UI';
import CategoryChart from '../components/CategoryChart';
export default function YouTubeCaseStudy() {
  const [tableau, setTableau] = useState(true);
  return (
    <main>
      <section className="case-hero wrap">
        <a href="#projects" className="text-link">
          <ArrowLeft size={16} /> All work
        </a>
        <Label>CASE STUDY 01 · CONTENT ANALYTICS</Label>
        <h1>
          Beyond the
          <br />
          <span>view count.</span>
        </h1>
        <p className="case-subtitle">
          Which YouTube Shorts topics deserve the next content experiment?
        </p>
        <div className="case-meta">
          <div>
            <small>ROLE</small>
            <span>Data analysis & storytelling</span>
          </div>
          <div>
            <small>METHOD</small>
            <span>PACE · Exploratory analysis</span>
          </div>
          <div>
            <small>STACK</small>
            <span>Python · pandas · Tableau</span>
          </div>
        </div>
        <div className="hero-actions">
          <Out href={links.tableau} className="button dark">
            Explore Tableau
          </Out>
          <Out href={links.repo} className="button outline">
            View the code <Github size={16} />
          </Out>
        </div>
      </section>
      <div className="case-kpis">
        <div>
          <b>346</b>
          <span>exported Shorts</span>
        </div>
        <div>
          <b>120.1M</b>
          <span>accumulated views</span>
        </div>
        <div>
          <b>$6,624.59</b>
          <span>estimated revenue</span>
        </div>
        <div>
          <b>20</b>
          <span>content categories</span>
        </div>
      </div>
      <div className="wrap case-layout">
        <aside className="case-nav" aria-label="Case study sections">
          <span>THE STORY</span>
          {[
            ['question', '01', 'The question'],
            ['process', '02', 'The process'],
            ['findings', '03', 'The findings'],
            ['deliverables', '04', 'The deliverables'],
            ['next', '05', 'The next decision'],
          ].map(([id, n, t]) => (
            <a key={id} href={'#project/youtube-shorts/' + id}>
              <small>{n}</small>
              {t}
            </a>
          ))}
        </aside>
        <div className="case-body">
          <section id="question">
            <Label>01 / THE QUESTION</Label>
            <h2>
              More views isn’t
              <br />
              the whole answer.
            </h2>
            <p className="lead">
              A topic can lead in total views simply because more videos were published
              about it. What does a typical video in that category actually achieve?
            </p>
            <p>
              I analyzed exported YouTube Shorts data to compare category performance,
              investigate audience and revenue patterns, and identify priorities for
              future content tests.
            </p>
            <div className="question-box">
              <span>THE BUSINESS DECISION</span>
              <p>
                Where should a content team focus its next experiments — and how much
                confidence should it place in the historical results?
              </p>
            </div>
          </section>
          <section id="process">
            <Label>02 / THE PROCESS</Label>
            <h2>From export to evidence.</h2>
            <p>A documented ETL and analysis workflow, structured with PACE.</p>
            <div className="process-grid">
              {[
                [
                  'P',
                  'Plan',
                  'Frame the decision',
                  'Define questions about reach, audience, revenue, and typical category performance.',
                ],
                [
                  'A',
                  'Analyze',
                  'Audit before interpreting',
                  'Inspect video IDs, dates, numeric fields, missing values, outliers, and differences between summary and row totals.',
                ],
                [
                  'C',
                  'Construct',
                  'Build the analytical view',
                  'Derive metrics, join categories by video ID, compare medians and sample sizes, and build the Tableau story.',
                ],
                [
                  'E',
                  'Execute',
                  'Communicate the tradeoffs',
                  'Deliver the notebook, reusable CSV, executive presentations, and recommendations with explicit limitations.',
                ],
              ].map(([l, t, h, p]) => (
                <div key={l}>
                  <span className="pace-letter">{l}</span>
                  <small>{t}</small>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <div className="pipeline">
              <Database size={18} />
              <span>Excel export</span>
              <ArrowRight size={15} />
              <span>Python / pandas</span>
              <ArrowRight size={15} />
              <span>Categorized CSV</span>
              <ArrowRight size={15} />
              <span>Tableau</span>
            </div>
            <p className="small muted">
              343 categorized videos; 3 remain unclassified. Labels were assigned from
              titles and supplied summaries, with review status retained. Some assignments
              remain provisional.
            </p>
          </section>
          <section id="findings">
            <Label>03 / THE FINDINGS</Label>
            <h2>
              The ranking is a starting point.
              <br />
              Context changes the decision.
            </h2>
            <CategoryChart />
            <div className="finding-grid">
              <article>
                <span className="finding-number">01</span>
                <h3>A promising topic is not a guarantee.</h3>
                <p>
                  Liver & Gallbladder Health leads the overall median at 347,597 views,
                  based on 9 videos. Food, Herbs & Supplements has a lower median of
                  238,852, but a much larger sample of 112 videos.
                </p>
              </article>
              <article>
                <span className="finding-number">02</span>
                <h3>Year and sample size matter.</h3>
                <p>
                  Among 2025 publications, Eye & Ear Health leads with 319,896 median
                  views — based on only 2 videos. Publication-year comparisons add context
                  but do not equalize video age.
                </p>
              </article>
            </div>
            <h3 className="subheading">What else is associated with views?</h3>
            <div className="table-scroll">
              <table>
                <caption className="sr-only">Descriptive correlations with views</caption>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Pearson</th>
                    <th>Spearman</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Reported new viewers', '0.872', '0.908'],
                    ['Impressions CTR', '0.122', '0.389'],
                    ['Average viewing-duration %', '0.256', '0.308'],
                  ].map((r) => (
                    <tr key={r[0]}>
                      {r.map((v, i) =>
                        i === 0 ? (
                          <th scope="row" key={i}>
                            {v}
                          </th>
                        ) : (
                          <td key={i}>{v}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Reported new viewers had the strongest association with views. Removing the
              most-viewed video left Spearman almost unchanged (0.907). This is evidence
              of association, not a causal explanation or a predictive model.
            </p>
            <details className="analysis-detail">
              <summary>
                Revenue and viewing-duration checks <Plus size={18} />
              </summary>
              <p>
                The aggregate estimated revenue ratio was $0.055139 per 1,000 views. One
                video with 761,693 views reported only $2.045 in estimated revenue; it was
                flagged for review, without inventing a cause.
              </p>
              <p>
                202 videos had calculated average viewing duration above 100% of their
                length. The highest ratio (244.44%) came from a 9-second video with 22
                seconds average viewing duration, confirmed in the source. This measure is
                not a viewer completion rate.
              </p>
            </details>
            <div className="limitations">
              <h3>What this analysis cannot tell us</h3>
              <ul>
                <li>Accumulated views give older videos more time to grow.</li>
                <li>Small and unequal category samples limit comparisons.</li>
                <li>
                  Categories are based on titles and supplied summaries, not independent
                  viewing of every video.
                </li>
                <li>
                  The source summary and video-level view totals differ; the gap is
                  unresolved. This project reports only the 346 exported rows.
                </li>
                <li>Correlations and category rankings do not establish causation.</li>
              </ul>
            </div>
          </section>
          <section id="deliverables">
            <Label>04 / THE DELIVERABLES</Label>
            <h2>Explore the evidence.</h2>
            <p>
              Choose the level of detail you need: a guided story, stakeholder summaries,
              or the complete analysis.
            </p>
            <div className="deliverable-grid">
              <Out href={links.tableau} className="deliverable">
                <BarChart3 />
                <h3>Interactive story</h3>
                <p>Four guided chapters with publication-year filtering.</p>
                <span>Open Tableau</span>
              </Out>
              <Out
                href={links.repo + '/blob/main/notebooks/01_data_audit.ipynb'}
                className="deliverable"
              >
                <Code2 />
                <h3>Analysis notebook</h3>
                <p>Data checks, calculations, visualizations, and interpretation.</p>
                <span>Read on GitHub</span>
              </Out>
              <a
                className="deliverable"
                href="/documents/YouTube_Shorts_Executive_Report.pptx"
                download
              >
                <FileText />
                <h3>Executive report</h3>
                <p>Audience, viewing behavior, and revenue findings.</p>
                <span>
                  Download PowerPoint <Download size={15} />
                </span>
              </a>
              <a
                className="deliverable"
                href="/documents/YouTube_Shorts_Category_Executive_Summaries.pptx"
                download
              >
                <FileText />
                <h3>Category summaries</h3>
                <p>Category comparisons, cohort insights, and test priorities.</p>
                <span>
                  Download PowerPoint <Download size={15} />
                </span>
              </a>
            </div>
            <div className="tableau-panel">
              <div>
                <h3>The dashboard, right here.</h3>
                <p>
                  Load the Tableau story to explore the published analysis without leaving
                  this page.
                </p>
              </div>
              <button
                className="button dark"
                onClick={() => setTableau(!tableau)}
                aria-expanded={tableau}
              >
                {tableau ? 'Close dashboard' : 'Load interactive dashboard'}{' '}
                {tableau ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              {tableau && (
                <>
                  <iframe
                    title="YouTube Shorts Tableau story"
                    src={links.tableau + '&:embed=true&:toolbar=yes'}
                    loading="lazy"
                    className="tableau-frame"
                  />
                  <p className="small">
                    If Tableau does not load or your browser blocks the embed,{' '}
                    <a
                      className="underline"
                      href={links.tableau}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      open the dashboard in a new tab
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
            <Out
              href={links.repo + '/blob/main/data/processed/youtube_shorts_tableau.csv'}
              className="text-link mt-6"
            >
              Inspect the prepared dataset <Database size={16} />
            </Out>
          </section>
          <section id="next">
            <Label>05 / THE NEXT DECISION</Label>
            <h2>
              Test the opportunity.
              <br />
              Measure it fairly.
            </h2>
            <p className="lead">
              Use the historical findings to choose experiments, then compare new videos
              over the same first 28 days after publication.
            </p>
            <ul className="next-list">
              <li>
                <Check />
                Test more content in Liver & Gallbladder, Kidney & Urinary, and Heart &
                Circulation.
              </li>
              <li>
                <Check />
                Include Food, Herbs & Supplements as a larger historical comparison group.
              </li>
              <li>
                <Check />
                Track reach, reported new viewers, viewing duration, and estimated revenue
                together.
              </li>
              <li>
                <Check />
                Improve classification quality and preserve sample sizes in future
                reporting.
              </li>
            </ul>
            <p className="small muted">
              These are proposed actions. Their business impact has not been measured.
              PostgreSQL analysis is a planned extension, not part of this completed
              workflow.
            </p>
            <a href="#contact" className="button dark mt-8">
              Discuss this project <ArrowUpRight size={18} />
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
