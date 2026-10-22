export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
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
    slug: 'pharmacy-platform',
    number: '02',
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
