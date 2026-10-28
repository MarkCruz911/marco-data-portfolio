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
  Plus,
  Minus,
  Check,
} from 'lucide-react';

import { Out, Label } from '../components/UI';

const projectLinks = {
  repo: 'https://github.com/MarkCruz911/youtube-long-form-performance-analysis',
  tableau:
    'https://public.tableau.com/app/profile/marco.antonio.cruz.rojas/viz/YouTubeLongFormPerformanceAnalysis/YouTubeLongKeyFinding',
  tableauEmbed:
    'https://public.tableau.com/views/YouTubeLongFormPerformanceAnalysis/YouTubeLongKeyFinding?:showVizHome=no&:embed=true&:toolbar=yes',
};

type CategoryResult = {
  name: string;
  medianViews: number;
  videoCount: number;
};

type PublicationGroup = 'all' | '2024' | '2025' | '2026';

// Top five eligible categories within each publication group.
// Eligibility: at least five videos in that group.
const categoryResults: Record<PublicationGroup, CategoryResult[]> = {
  all: [
    {
      name: 'Prepared Waters & Hydration',
      medianViews: 37240,
      videoCount: 27,
    },
    {
      name: 'Digestive Health',
      medianViews: 37188.5,
      videoCount: 12,
    },
    {
      name: 'Vitamins, Minerals & Other Supplements',
      medianViews: 35967,
      videoCount: 20,
    },
    {
      name: 'Coffee',
      medianViews: 35880,
      videoCount: 9,
    },
    {
      name: 'Herbs & Spices',
      medianViews: 33188,
      videoCount: 33,
    },
  ],
  '2024': [
    {
      name: 'Teas & Infusions',
      medianViews: 35913.5,
      videoCount: 6,
    },
  ],
  '2025': [
    {
      name: 'Prepared Waters & Hydration',
      medianViews: 49148,
      videoCount: 19,
    },
    {
      name: 'Coffee',
      medianViews: 43641.5,
      videoCount: 6,
    },
    {
      name: 'Vitamins, Minerals & Other Supplements',
      medianViews: 38781,
      videoCount: 14,
    },
    {
      name: 'Juices & Smoothies',
      medianViews: 37575,
      videoCount: 57,
    },
    {
      name: 'Digestive Health',
      medianViews: 36119,
      videoCount: 7,
    },
  ],
  '2026': [
    {
      name: 'Oils & Vinegars',
      medianViews: 39369,
      videoCount: 5,
    },
    {
      name: 'Vitamins, Minerals & Other Supplements',
      medianViews: 28658,
      videoCount: 6,
    },
    {
      name: 'Herbs & Spices',
      medianViews: 22944,
      videoCount: 6,
    },
    {
      name: 'Teas & Infusions',
      medianViews: 21889.5,
      videoCount: 36,
    },
    {
      name: 'Prepared Waters & Hydration',
      medianViews: 19439,
      videoCount: 7,
    },
  ],
};

const formatViews = (value: number) =>
  value.toLocaleString('en-US', {
    maximumFractionDigits: 1,
  });

function LongFormCategoryChart() {
  const [year, setYear] = useState<PublicationGroup>('all');

  const rows = categoryResults[year];
  const maximumViews = 50000;

  return (
    <div
      style={{
        padding: 'clamp(16px, 3vw, 28px)',
        border: '1px solid rgba(148, 163, 184, 0.25)',
        borderRadius: '8px',
        background: 'rgba(15, 28, 48, 0.65)',
        margin: '28px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '28px',
        }}
      >
        <div>
          <h3>Which categories stand out?</h3>
          <p className="small">
            Top five by median views · at least five videos per category
          </p>
        </div>

        <label
          htmlFor="long-form-publication-year"
          style={{
            display: 'grid',
            gap: '8px',
            fontSize: '12px',
          }}
        >
          Publication year
          <select
            id="long-form-publication-year"
            value={year}
            onChange={(event) =>
              setYear(event.target.value as PublicationGroup)
            }
            style={{
              padding: '9px 12px',
              borderRadius: '4px',
              border: '1px solid #475569',
              background: '#14243b',
              color: '#f8fafc',
              font: 'inherit',
            }}
          >
            <option value="all">All years</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </label>
      </div>

      <div
        aria-live="polite"
        style={{
          display: 'grid',
          gap: '22px',
        }}
      >
        {rows.map((row, index) => (
          <div key={row.name}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '16px',
                marginBottom: '8px',
              }}
            >
              <div>
                <span>{row.name}</span>
                <small
                  style={{
                    display: 'block',
                    marginTop: '4px',
                    color: '#94a3b8',
                  }}
                >
                  n = {row.videoCount} videos
                </small>
              </div>

              <strong
                style={{
                  whiteSpace: 'nowrap',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {formatViews(row.medianViews)}
              </strong>
            </div>

            <div
              aria-hidden="true"
              style={{
                height: '16px',
                borderRadius: '3px',
                background: '#1b2d46',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${(row.medianViews / maximumViews) * 100}%`,
                  borderRadius: '3px',
                  background:
                    index === 0
                      ? 'linear-gradient(90deg, #16b0ce, #42d9e8)'
                      : 'linear-gradient(90deg, #8b6bd9, #b095f2)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="small muted" style={{ marginTop: '20px' }}>
        Shared bar scale: 0–50,000 views. This selector changes only this
        chart; the page-level indicators describe all 498 videos.
      </p>

      {year === '2024' && (
        <p className="small">
          Only Teas & Infusions meets the five-video threshold in 2024.
          This is not a ranking across multiple eligible categories.
        </p>
      )}

      <p className="small">
        These are exported metrics for videos published in the selected
        year, not views earned exclusively during that year. Publication
        groups do not equalize exposure time.
      </p>

      <p className="small muted">
        Source: notebook category summaries. This chart presents selected
        results; explore the full eligible-category comparison in Tableau.
      </p>
    </div>
  );
}

export default function YouTubeLongFormCaseStudy() {
  const [tableau, setTableau] = useState(true);

  return (
    <main>
      <section className="case-hero wrap">
        <a href="#projects" className="text-link">
          <ArrowLeft size={16} /> All work
        </a>

        <Label>CASE STUDY 02 · LONG-FORM CONTENT ANALYTICS</Label>

        <h1>
          Beyond reach.
          <br />
          <span>Understand the return.</span>
        </h1>

        <p className="case-subtitle">
          Which long-form YouTube topics combine promising typical reach
          with monetization—and deserve the next content experiment?
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
          <Out href={projectLinks.tableau} className="button dark">
            Explore Tableau
          </Out>

          <Out href={projectLinks.repo} className="button outline">
            View the code <Github size={16} />
          </Out>
        </div>
      </section>

      <div className="case-kpis">
        <div>
          <b>498</b>
          <span>exported long-form videos</span>
        </div>
        <div>
          <b>25.0M</b>
          <span>views in the export</span>
        </div>
        <div>
          <b>$91,752.29</b>
          <span>estimated revenue · USD</span>
        </div>
        <div>
          <b>42</b>
          <span>selected content categories</span>
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
          ].map(([id, number, title]) => (
            <a key={id} href={`#project/youtube-long-form/${id}`}>
              <small>{number}</small>
              {title}
            </a>
          ))}
        </aside>

        <div className="case-body">
          <section id="question">
            <Label>01 / THE QUESTION</Label>

            <h2>
              High totals are useful.
              <br />
              Typical performance adds context.
            </h2>

            <p className="lead">
              A category can generate substantial views because it has
              more published videos or a few exceptional successes.
              What does a typical video achieve—and how does that reach
              translate into estimated revenue?
            </p>

            <p>
              I analyzed 498 exported long-form videos from Dr. Agustín
              Landívar’s YouTube channel to support content decisions
              relevant to Dr. Landívar, the CEO, and the content team.
              The analysis examines audience, viewing behavior,
              monetization, and editorial categories.
            </p>

            <p>
              The video-level subset contains 25,048,026 views and
              USD 91,752.29 in estimated revenue. These are subset totals,
              not totals for the entire channel.
            </p>

            <div className="question-box">
              <span>THE BUSINESS DECISION</span>
              <p>
                Which topics should the team test next, considering
                typical reach, revenue, sample size, and the limitations
                of historical comparisons?
              </p>
            </div>
          </section>

          <section id="process">
            <Label>02 / THE PROCESS</Label>
            <h2>From export to a documented decision.</h2>

            <p>
              A Python-based ETL and exploratory analysis workflow,
              organized with PACE and delivered through Tableau.
            </p>

            <div className="process-grid">
              {[
                [
                  'P',
                  'Plan',
                  'Define the comparison',
                  'Frame questions about typical reach, monetization, audience, and category differences. Document uncertainties about the export scope.',
                ],
                [
                  'A',
                  'Analyze',
                  'Audit the source',
                  'Check identifiers, dates, numeric fields, missing values, durations, and source totals. Explore distributions and influential observations.',
                ],
                [
                  'C',
                  'Construct',
                  'Build the analytical dataset',
                  'Calculate viewing-duration percentages and revenue ratios. Join selected categories by video ID and compare medians, distributions, and publication groups.',
                ],
                [
                  'E',
                  'Execute',
                  'Make the evidence accessible',
                  'Verify the exported CSV, publish the notebook and charts, and build a Tableau story with recommendations and explicit limitations.',
                ],
              ].map(([letter, phase, title, description]) => (
                <div key={letter}>
                  <span className="pace-letter">{letter}</span>
                  <small>{phase}</small>
                  <h3>{title}</h3>
                  <p>{description}</p>
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
              All 498 videos have a selected category: 494 assignments
              were accepted from titles and four were based on supplied
              summaries. Classification status and notes were retained;
              category coverage does not mean every video was independently
              reviewed.
            </p>

            <details className="analysis-detail">
              <summary>
                What was validated before export? <Plus size={18} />
              </summary>
              <p>
                The final export contains 498 video records and 23 fields,
                with unique video IDs and no null values in the selected
                columns. Reading the CSV back confirmed its shape,
                identifiers, categories, total views, and estimated revenue.
              </p>
              <p>
                Categories with fewer than five videos remain in the
                dataset. The minimum-count rule applies only to selected
                comparisons, not to the underlying export.
              </p>
            </details>
          </section>

          <section id="findings">
            <Label>03 / THE FINDINGS</Label>

            <h2>
              Reach, revenue, and context.
              <br />
              No single ranking tells the whole story.
            </h2>

            <LongFormCategoryChart />

            <div className="finding-grid">
              <article>
                <span className="finding-number">01</span>
                <h3>Similar medians, different distributions.</h3>
                <p>
                  Prepared Waters & Hydration and Digestive Health lead
                  eligible categories with median views of 37,240 and
                  37,188.5. Their sample sizes are 27 and 12 videos.
                  The boxplots show greater relative dispersion in the
                  middle 50% of Prepared Waters & Hydration results.
                </p>
              </article>

              <article>
                <span className="finding-number">02</span>
                <h3>Publishing volume and typical reach differ.</h3>
                <p>
                  Teas & Infusions contributes 4,313,364 total views
                  across 103 videos, but its median is 27,819.
                  Juices & Smoothies contributes USD 16,328.24 in estimated
                  revenue across 91 videos, with a median of 25,236 views.
                  Large contributions do not imply the highest typical
                  performance.
                </p>
              </article>

              <article>
                <span className="finding-number">03</span>
                <h3>Revenue per video and per view answer different questions.</h3>
                <p>
                  Coffee leads eligible categories in median estimated
                  revenue per video. Diabetes & Blood Sugar leads in
                  aggregate revenue per 1,000 views at approximately
                  USD 5.05. Prepared Waters & Hydration ranks third in
                  median revenue despite a lower aggregate ratio of
                  approximately USD 2.95 per 1,000 views.
                </p>
              </article>

              <article>
                <span className="finding-number">04</span>
                <h3>Publication groups change the picture.</h3>
                <p>
                  Prepared Waters & Hydration leads eligible categories
                  among 2025 publications with 49,148 median views
                  across 19 videos. Oils & Vinegars leads in 2026 with
                  39,369 across only five videos. These are different
                  groups with unequal exposure time, not evidence of
                  annual growth or decline.
                </p>
              </article>
            </div>

            <h3 className="subheading">
              What is associated with views?
            </h3>

            <div className="table-scroll">
              <table>
                <caption className="sr-only">
                  Descriptive correlations with views across 498 videos
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Metric</th>
                    <th scope="col">Pearson</th>
                    <th scope="col">Spearman</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Reported new viewers', '0.936', '0.908'],
                    ['Impressions CTR', '0.430', '0.811'],
                    ['Video duration', '0.184', '0.300'],
                    ['Average viewing-duration %', '-0.027', '0.343'],
                  ].map(([metric, pearson, spearman]) => (
                    <tr key={metric}>
                      <th scope="row">{metric}</th>
                      <td>{pearson}</td>
                      <td>{spearman}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Among these four metrics, reported new viewers has the
              strongest association with views. Both are volume-related
              measures, so this does not establish a content mechanism.
              CTR has a stronger rank association than linear association.
              Viewing-duration percentage shows why Pearson and Spearman
              can tell different parts of the story.
            </p>

            <details className="analysis-detail">
              <summary>
                Sensitivity to the most-viewed videos <Plus size={18} />
              </summary>
              <p>
                After excluding the five most-viewed videos for a
                sensitivity check, CTR’s Pearson correlation changes
                from 0.430 to 0.506, while Spearman remains approximately
                0.811. For viewing-duration percentage, Pearson changes
                from -0.027 to 0.052 and Spearman from 0.343 to 0.365.
              </p>
              <p>
                The full dataset remains the primary result. These checks
                show sensitivity to specific exclusions; they do not
                establish causality or rule out other influential factors.
              </p>
            </details>

            <details className="analysis-detail">
              <summary>
                How monetization and viewing duration were calculated
                <Plus size={18} />
              </summary>
              <p>
                Aggregate estimated revenue per 1,000 views equals total
                estimated revenue divided by total views, multiplied by
                1,000. Across the exported subset, the result is
                approximately USD 3.66.
              </p>
              <p>
                This aggregate ratio gives more weight to videos with more
                views. It is different from the median individual-video
                ratio, and neither measure represents profit.
              </p>
              <p>
                Average viewing-duration percentage equals average seconds
                watched divided by video length, multiplied by 100.
                It is not the percentage of viewers who completed a video.
              </p>
            </details>

            <div className="limitations">
              <h3>What this analysis cannot establish</h3>
              <ul>
                <li>
                  The reporting period, export filters, and selection
                  criteria require confirmation before broader conclusions.
                </li>
                <li>
                  The source summary and video-level subset have different
                  totals. This project reports the 498 video records.
                </li>
                <li>
                  Publication-year groups do not equalize exposure time.
                  Newer videos may have had less opportunity to accumulate
                  views.
                </li>
                <li>
                  Small and unequal samples limit category comparisons.
                  Five videos is a display threshold, not statistical
                  assurance.
                </li>
                <li>
                  Editorial categories combine health topics and ingredient
                  or preparation groups. Assignments were not all verified
                  against video content.
                </li>
                <li>
                  Correlations and category rankings do not establish
                  causation. Estimated revenue is not profit or product
                  sales.
                </li>
              </ul>
            </div>
          </section>

          <section id="deliverables">
            <Label>04 / THE DELIVERABLES</Label>
            <h2>Explore the evidence.</h2>

            <p>
              Follow the Tableau story, inspect the analysis, or explore
              the prepared data and classification decisions.
            </p>

            <div className="deliverable-grid">
              <Out href={projectLinks.tableau} className="deliverable">
                <BarChart3 />
                <h3>Interactive story</h3>
                <p>
                  Overall performance, category comparisons, the 2025
                  publication group, and recommendations.
                </p>
                <span>Open Tableau</span>
              </Out>

              <Out
                href={`${projectLinks.repo}/blob/main/notebooks/01_data_audit.ipynb`}
                className="deliverable"
              >
                <Code2 />
                <h3>Analysis notebook</h3>
                <p>
                  Data checks, calculations, visualizations, interpretations,
                  and the documented PACE workflow.
                </p>
                <span>Read on GitHub</span>
              </Out>

              <Out
                href={`${projectLinks.repo}/blob/main/data/processed/youtube_long_form_tableau.csv`}
                className="deliverable"
              >
                <Database />
                <h3>Prepared dataset</h3>
                <p>
                  498 videos and 23 fields, including metrics, selected
                  categories, and classification notes.
                </p>
                <span>Inspect the CSV</span>
              </Out>

              <Out
                href={`${projectLinks.repo}/blob/main/data/processed/long_form_categories_reviewed_v2.csv`}
                className="deliverable"
              >
                <FileText />
                <h3>Category decisions</h3>
                <p>
                  Video-level category assignments with their status
                  and supporting notes.
                </p>
                <span>Review classification provenance</span>
              </Out>
            </div>

            <div className="tableau-panel">
              <div>
                <h3>The dashboard, right here.</h3>
                <p>
                  Explore the published story and filter by publication
                  year without leaving this page.
                </p>
              </div>

              <button
                type="button"
                className="button dark"
                onClick={() => setTableau((open) => !open)}
                aria-expanded={tableau}
                aria-controls="long-form-tableau-content"
              >
                {tableau ? 'Close dashboard' : 'Load interactive dashboard'}{' '}
                {tableau ? <Minus size={16} /> : <Plus size={16} />}
              </button>

              <div id="long-form-tableau-content" hidden={!tableau}>
                {tableau && (
                  <>
                    <iframe
                      title="YouTube Long-Form Performance Analysis Tableau story"
                      src={projectLinks.tableauEmbed}
                      loading="lazy"
                      className="tableau-frame"
                      allowFullScreen
                      style={{
                        width: '100%',
                        minHeight: '1000px',
                        border: 0,
                      }}
                    />

                    <p className="small">
                      If Tableau does not load or your browser blocks the
                      embed,{' '}
                      <a
                        className="underline"
                        href={projectLinks.tableau}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        open the story in a new tab
                      </a>
                      .
                    </p>
                  </>
                )}
              </div>
            </div>

            <Out
              href={`${projectLinks.repo}/tree/main/images`}
              className="text-link mt-6"
            >
              Explore notebook charts <BarChart3 size={16} />
            </Out>
          </section>

          <section id="next">
            <Label>05 / THE NEXT DECISION</Label>

            <h2>
              Test the opportunity.
              <br />
              Compare it fairly.
            </h2>

            <p className="lead">
              Use the historical results to choose small experiments,
              then compare new releases over the same first 30 days
              after publication.
            </p>

            <ul className="next-list">
              <li>
                <Check />
                Investigate Prepared Waters & Hydration and Digestive
                Health as candidates for reach-focused content tests.
              </li>
              <li>
                <Check />
                Examine Coffee and Diabetes & Blood Sugar for monetization
                opportunities while accounting for their smaller samples.
              </li>
              <li>
                <Check />
                Review standout videos alongside typical videos from the
                same category to identify hypotheses about presentation
                and subject matter.
              </li>
              <li>
                <Check />
                Track views, estimated revenue, revenue per 1,000 views,
                CTR, and viewing duration together.
              </li>
              <li>
                <Check />
                Confirm the reporting scope and revisit ambiguous category
                assignments before making major production decisions.
              </li>
            </ul>

            <p className="small muted">
              These are proposed actions, not measured business outcomes.
              This project documents an exploratory analysis and reporting
              workflow; it does not claim a predictive model or causal
              improvement in channel performance.
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