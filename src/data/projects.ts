export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  githubUrl?: string;
  stats: { value: string; label: string }[];
  caseStudy: {
    question: string;
    objective: string;
    data: string;
    process: string[];
    findings: string[];
    deliverables: string[];
    limitations: string[];
    next: string[];
  } | null;
};
export const projects: Project[] = [
  {
    slug: 'youtube-shorts',
    number: '01',
    title: 'YouTube Shorts Performance Analysis',
    category: 'DATA ANALYTICS · BUSINESS INTELLIGENCE',
    description:
      'Which content topics deserve the next experiment? An exploration of audience, revenue, and typical performance across video categories.',
    tools: ['Python', 'pandas', 'Tableau', 'PACE'],
    stats: [
      { value: '346', label: 'videos' },
      { value: '120.1M', label: 'views analyzed' },
      { value: '20', label: 'categories' },
    ],
    caseStudy: null,
  },
  {
    slug: 'youtube-long-form',
    number: '02',
    title: 'YouTube Long-Form Performance Analysis',
    category: 'DATA ANALYTICS · BUSINESS INTELLIGENCE',
    description:
      'Which topics combine strong typical reach with monetization? An analysis of 498 long-form videos, comparing content categories, revenue, and publication-year groups to guide content experiments.',
    tools: ['Python', 'pandas', 'Matplotlib', 'Seaborn', 'Tableau', 'PACE'],
    githubUrl:
      'https://github.com/MarkCruz911/youtube-long-form-performance-analysis',
    stats: [
      { value: '498', label: 'videos analyzed' },
      { value: '25.0M', label: 'views analyzed' },
      { value: '42', label: 'content categories' },
    ],
    caseStudy: {
      question:
        'Which long-form content categories show promising reach and monetization, and how do their results differ across publication-year groups?',
      objective:
        'Support content planning for Dr. Agustín Landívar’s YouTube channel by identifying topics worth testing and communicating findings relevant to the CEO and content team.',
      data:
        'The analyzed export contains 498 videos with 25,048,026 views and USD 91,752.29 in estimated revenue. Fields include publication dates, duration, impressions, CTR, viewing duration, audience segments, and revenue. These totals describe the exported subset, not the entire channel.',
      process: [
        'Organized the analysis using PACE: Plan, Analyze, Construct, and Execute.',
        'Cleaned and standardized the Excel export with Python and pandas, checking identifiers, missing values, dates, durations, and numeric fields.',
        'Calculated viewing-duration percentages and estimated revenue per 1,000 views.',
        'Explored distributions, Pearson and Spearman correlations, and sensitivity to the most-viewed videos.',
        'Integrated 42 editorial categories using video IDs: 494 assignments were accepted from titles and four were based on supplied summaries.',
        'Compared category counts, median views, distributions, and monetization. Selected charts require at least five videos per displayed group.',
        'Compared categories within publication-year groups while documenting unequal exposure time.',
        'Exported and verified a 498-row, 23-column dataset, then built a Tableau dashboard and story with publication-year filtering.',
      ],
      findings: [
        'Among categories with at least five videos, Prepared Waters & Hydration and Digestive Health lead in median views: 37,240 across 27 videos and 37,188.5 across 12 videos.',
        'Teas & Infusions contributes the most total views, while Juices & Smoothies contributes the most total estimated revenue. Neither leads in typical views per video.',
        'Coffee leads in median estimated revenue per video among eligible categories. Diabetes & Blood Sugar leads in aggregate revenue per 1,000 views at approximately USD 5.05.',
        'Category distributions contain standout videos, showing why totals and medians should be interpreted together.',
        'Prepared Waters & Hydration leads eligible categories in the 2025 publication group; Oils & Vinegars leads in 2026, based on only five videos.',
      ],
      deliverables: [
        'Documented Python notebook with data validation, visualizations, interpretations, and recommendations.',
        'Video-level CSV prepared for Tableau, including selected categories and classification provenance.',
        'Separate category-review file preserving classification decisions.',
        'Interactive Tableau dashboard with view, video-count, and estimated-revenue indicators.',
        'Tableau story covering overall performance, category comparisons, the 2025 publication group, and recommendations and limitations.',
        'GitHub repository containing the notebook, charts, and processed datasets.',
      ],
      limitations: [
        'The reporting period, export filters, and selection criteria require confirmation before interpreting these results as channel-wide performance.',
        'Publication-year comparisons involve different sets of videos and do not equalize the time available to accumulate views.',
        'Categories represent editorial subjects, including health topics and ingredient or preparation groups. Assignments were not all independently verified against video content.',
        'The five-video threshold is a display rule, not a guarantee of representativeness or statistical significance.',
        'Correlations and category comparisons do not establish causation. Estimated revenue is not profit or product-sales revenue.',
      ],
      next: [
        'Test selected topics in small batches and compare results over the same first-30-day observation window.',
        'Review standout videos for patterns in topics, titles, thumbnails, and duration.',
        'Evaluate reach, estimated revenue, and viewing duration together before changing the production mix.',
        'Confirm the reporting scope and revisit ambiguous category assignments.',
      ],
    },
  },
  {
    slug: 'pharmacy-platform',
    number: '03',
    title: 'Pharmacy Management & E-commerce',
    category: 'SOFTWARE DEVELOPMENT · APPLIED MACHINE LEARNING',
    description:
      'Connecting daily pharmacy operations with business visibility: sales, inventory, reporting, and customer segmentation with K-Means.',
    tools: ['Laravel', 'JavaScript', 'Tailwind CSS', 'K-Means'],
    stats: [
      { value: '~12', label: 'business indicators' },
      { value: 'K-Means', label: 'customer grouping' },
      { value: '2nd', label: 'academic award' },
    ],
    caseStudy: {
      question:
        'How can a pharmacy bring operational workflows and business indicators into one platform?',
      objective:
        'Build an integrated system for sales, stock, customers, invoicing, and administration, with reports that make business performance visible.',
      data: 'The system uses operational records for sales, inventory, customers, and invoicing. Dataset size, clustering features, and model-validation results are not documented in this portfolio yet.',
      process: [
        'Developed the application using Laravel, JavaScript, and Tailwind CSS.',
        'Implemented sales, inventory, customer management, invoicing, and administration modules.',
        'Built reports and a dashboard with approximately 12 business indicators.',
        'Applied K-Means to group customers by patterns.',
      ],
      findings: [
        'The dashboard brings revenue, expenses, and net profit into a shared reporting view.',
        'Low-stock and expiration-date indicators make inventory conditions visible.',
        'Customer grouping adds an analytical layer alongside transactional functions.',
      ],
      deliverables: [
        'Pharmacy management and e-commerce application.',
        'Operational modules, reports, and a dashboard with approximately 12 indicators.',
        'Customer segmentation using K-Means.',
        'Graduation project (2024–2025); second place in the FICCT academic software research and development competition, July 2024.',
      ],
      limitations: [
        'No model accuracy, cluster-quality score, or measured commercial uplift is claimed.',
        'A public repository, live demo, and project screenshots have not yet been supplied. This case currently documents the work described in the CV.',
      ],
      next: [
        'Add screenshots and a demo when available.',
        'Document the clustering features, preprocessing, choice of cluster count, and validation approach.',
        'Connect the repository or technical report once available.',
      ],
    },
  },
];
