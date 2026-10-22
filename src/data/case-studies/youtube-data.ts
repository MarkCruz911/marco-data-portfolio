export type Year = 'All years' | '2023' | '2024' | '2025' | '2026';
export type Category = { name: string; count: number; views: number };
const c = (name: string, count: number, views: number): Category => ({
  name,
  count,
  views,
});
export const categories: Record<Year, Category[]> = {
  'All years': [
    c('Liver & Gallbladder Health', 9, 347597),
    c('Kidney & Urinary Health', 17, 279013),
    c('Heart & Circulation', 10, 246630),
    c('Food, Herbs & Supplements', 112, 238851.5),
    c('Eye & Ear Health', 10, 211791),
  ],
  '2023': [
    c('Liver & Gallbladder Health', 2, 903324),
    c('Kidney & Urinary Health', 4, 791321.5),
    c('General Health & Lifestyle', 4, 439345),
    c('Skin & Hair Health', 8, 368731.5),
    c('Eye & Ear Health', 3, 350221),
  ],
  '2024': [
    c('Metabolic & Hormonal Health', 2, 2093847.5),
    c('Brain & Mental Health', 2, 1300180.5),
    c('Heart & Circulation', 2, 957325),
    c('Food, Herbs & Supplements', 26, 716599),
    c('Skin & Hair Health', 5, 398761),
  ],
  '2025': [
    c('Eye & Ear Health', 2, 319896),
    c('Liver & Gallbladder Health', 6, 317212.5),
    c('Heart & Circulation', 5, 243497),
    c('Infections & Parasites', 3, 200776),
    c('Kidney & Urinary Health', 10, 200544.5),
  ],
  '2026': [
    c('Brain & Mental Health', 1, 1772775),
    c('Eye & Ear Health', 2, 756894.5),
    c('Bone, Joint & Muscle Health', 4, 123607),
    c('Food, Herbs & Supplements', 20, 101464.5),
    c('Liver & Gallbladder Health', 1, 96179),
  ],
};
