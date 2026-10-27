/**
 * Public-site switches.
 *
 * `academy`: TechRise Academy (courses, internship program, placement). It is hidden from the
 * public site (menus, home, products, pricing, sitemap, search) and /academy answers 404, but its
 * pages and data stay in the repo (app/academy, components/home/Academy.tsx,
 * lib/content/academy-courses.ts). Set it to true to show the structure again; the short mentions
 * in plain copy (company description, FAQ, support, ...) were reworded and would need re-adding.
 */
export const FEATURES = {
  academy: false,
} as const;
