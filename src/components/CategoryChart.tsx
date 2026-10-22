import { useState } from 'react';
import { categories, type Year } from '../data/case-studies/youtube-data';
const number = (n: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);
export default function CategoryChart() {
  const [year, setYear] = useState<Year>('All years');
  const data = categories[year];
  const max = Math.max(...data.map((d) => d.views));
  return (
    <div className="interactive-chart">
      <div className="flex flex-wrap justify-between gap-4 items-start">
        <div>
          <h3>Which categories stand out?</h3>
          <p>Top 5 by median accumulated views</p>
        </div>
        <label className="year-select">
          Publication year
          <select value={year} onChange={(e) => setYear(e.target.value as Year)}>
            {Object.keys(categories).map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="bar-chart" aria-live="polite">
        {data.map((d, i) => (
          <div className="bar-row" key={d.name}>
            <div className="bar-label">
              <span>{d.name}</span>
              <small>n = {d.count} videos</small>
            </div>
            <div className="bar-track">
              <div
                className={i === 0 ? 'bar primary' : 'bar'}
                style={{ width: `${(d.views / max) * 100}%` }}
              />
            </div>
            <strong>{number(d.views)}</strong>
          </div>
        ))}
      </div>
      <p className="chart-caution">
        Read the sample size, too.{' '}
        {year === '2025' ? 'The leading category has only 2 videos. ' : ''}These are
        accumulated views of videos published in the selected year, not views earned
        during that year.
      </p>
      <p className="small muted">
        Source: project category summaries. Values rounded for display. Three unclassified
        videos excluded. This chart is a curated summary; explore all categories in
        Tableau.
      </p>
    </div>
  );
}
