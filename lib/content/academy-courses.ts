export type AcademyCourse = {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate";
  liveProjects: boolean;
  certificate: boolean;
  placementAssistance: boolean;
  stack: string[];
};

export const academyCourses: AcademyCourse[] = [
  {
    title: "Python Full Stack Development",
    description:
      "Build end-to-end web applications with Python backends and modern frontend frameworks.",
    duration: "4–6 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Python", "Django", "React", "SQL"],
  },
  {
    title: "Java Full Stack Development",
    description:
      "Develop scalable applications using Java, Spring, and React with database integration.",
    duration: "5–6 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Java", "Spring", "React", "MySQL"],
  },
  {
    title: ".NET Full Stack Development",
    description:
      "Create business applications with C#, .NET, and SQL-backed data layers.",
    duration: "4–5 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["C#", ".NET", "SQL Server"],
  },
  {
    title: "React Development",
    description:
      "Build interactive web interfaces with React, Next.js, and TypeScript.",
    duration: "3–4 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Flutter Development",
    description:
      "Develop Android mobile applications with Flutter, Dart, and API integration.",
    duration: "3–4 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Flutter", "Dart", "APIs"],
  },
  {
    title: "Node.js Development",
    description:
      "Design and implement server-side APIs and services using Node.js.",
    duration: "3–4 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Manual Testing",
    description:
      "Learn test planning, test cases, defect reporting, and QA processes for software releases.",
    duration: "2–3 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Test Cases", "Bug Tracking", "QA"],
  },
  {
    title: "Automation Testing",
    description:
      "Automate UI and API tests using industry tools and CI-friendly workflows.",
    duration: "3–4 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Selenium", "API Testing", "CI"],
  },
  {
    title: "SQL",
    description:
      "Query, model, and optimize relational data with practical SQL exercises.",
    duration: "2–3 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["SQL", "Joins", "Indexing"],
  },
  {
    title: "Database Development",
    description:
      "Design schemas, stored procedures, and reliable data access patterns for applications.",
    duration: "3–4 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["PostgreSQL", "MySQL", "Modeling"],
  },
  {
    title: "Power BI",
    description:
      "Create dashboards and reports that turn business data into actionable insights.",
    duration: "2–3 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Power BI", "DAX", "Visuals"],
  },
  {
    title: "Data Analytics",
    description:
      "Analyze datasets with SQL, Python, and visualization tools for business decisions.",
    duration: "3–4 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["SQL", "Python", "Power BI"],
  },
  {
    title: "Data Engineering",
    description:
      "Build data pipelines and reliable data movement for analytics and applications.",
    duration: "4–5 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["ETL", "Python", "Warehousing"],
  },
  {
    title: "Data Science",
    description:
      "Apply statistical analysis and predictive modeling to real datasets.",
    duration: "4–5 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Python", "Pandas", "Modeling"],
  },
  {
    title: "Artificial Intelligence",
    description:
      "Learn foundational AI concepts and practical application patterns for business use cases.",
    duration: "4–5 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["AI Basics", "Python", "APIs"],
  },
  {
    title: "Machine Learning",
    description:
      "Train, evaluate, and deploy machine learning models for classification and prediction tasks.",
    duration: "4–5 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Scikit-learn", "Python", "Evaluation"],
  },
  {
    title: "Generative AI",
    description:
      "Build practical generative AI features such as assistants and document workflows.",
    duration: "3–4 Months",
    level: "Intermediate",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["LLMs", "Prompting", "LangChain"],
  },
  {
    title: "Internship Program",
    description:
      "Structured internship experience with guided projects, mentorship, and professional practices.",
    duration: "2–3 Months",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Projects", "Mentorship", "Reviews"],
  },
  {
    title: "Placement Assistance",
    description:
      "Interview preparation, resume support, and career guidance. Assistance does not guarantee employment.",
    duration: "Ongoing with program",
    level: "Beginner",
    liveProjects: true,
    certificate: true,
    placementAssistance: true,
    stack: ["Resume", "Mock Interviews", "Guidance"],
  },
];

// Add academy courses to search via a helper used by search-index enrichment
export const academySearchItems = academyCourses.map((course) => ({
  title: course.title,
  description: course.description,
  href: "/academy#courses",
  category: "Academy" as const,
  keywords: course.stack.map((s) => s.toLowerCase()),
}));
