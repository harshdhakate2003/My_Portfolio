export const personalInfo = {
  name: "Harsh Dhakate",
  brandFirst: "Harsh",
  brandLast: "Dev",
  initials: "HD",
  domain: "harsh.dev",
  title: "React.js Developer",
  footerText:
    "React.js Developer building modern and responsive web applications.",
  location: "Nagpur, Maharashtra, India",
  email: "harshdhakate7517@gmail.com",
  phone: "+91 7517818290", // set to "" if you do not want to show your phone number
  phoneHref: "tel:+917517818290",
  github: "https://github.com/harshdhakate2003",
  githubLabel: "github.com/harshdhakate2003",
  linkedin: "https://www.linkedin.com/in/harsh-dhakate-9599b82a5",
  linkedinLabel: "harsh-dhakate-9599b82a5",
  photo: "/profile.jpg", // put your photo in the public folder
  resumeUrl: "/Harsh_Dhakate_Resume.pdf", // put your resume in the public folder
  formEndpoint: "https://formspree.io/f/xgaapedq", // paste your Formspree endpoint here
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Words used by the typing effect in the hero section
export const roles = [
  "React.js Developer",
  "Frontend Developer",
  "Python Full Stack Developer",
];

export const aboutText = [
  "I am a Computer Science graduate and a React.js Developer Intern with hands-on experience in live project development, REST API integration, API testing, and debugging.",
  "I enjoy turning real business requirements into clean, maintainable interfaces such as dashboards, forms, tables, and booking flows. Alongside React, I have built full stack applications with Python and Django, so I understand both sides of an API.",
];

export const highlights = [
  {
    icon: "⚛️",
    title: "React Development",
    text: "Reusable components, hooks, routing, and clean folder structures.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    text: "Connecting screens to live REST APIs and testing responses in Postman.",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    text: "HR, staffing, purchase, and payroll panels with real business flows.",
  },
  {
    icon: "🐍",
    title: "Django Background",
    text: "Full stack projects with Django, Django ORM, and authentication.",
  },
];

// NOTE: These percentages are only placeholders. Change them to match your honest skill level.
export const skillGroups = [
  {
    title: "Frontend",
    color: "#8b5cf6",
    items: [
      { name: "React.js", level: 80 },
      { name: "JavaScript", level: 78 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend",
    color: "#06b6d4",
    items: [
      { name: "Python", level: 75 },
      { name: "Django", level: 75 },
      { name: "Django REST Framework", level: 65 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Database",
    color: "#10b981",
    items: [
      { name: "MySQL", level: 70 },
      { name: "SQLite", level: 70 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Tools",
    color: "#f59e0b",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Roboflow", level: 60 },
    ],
  },
];

// Put project screenshots in public/images and set the "image" field, for example "/images/safar2you.png".
// If "image" is empty, a gradient placeholder with the icon is shown.
export const projects = [
  {
    id: "safar2you",
    title: "Safar2You - Tours & Travel Website",
    icon: "🧳",
    image: "/images/safar2you.png",
    description:
      "Developed a complete React-based tour and travel platform, Safar2You, featuring destination discovery, advanced package filtering, interactive package details, dynamic trip cost calculation, traveller registration, booking management, wishlists, and authentication. Implemented reusable components, form validation, mock API services, and local storage-based booking persistence with fully responsive layouts.",
    longDescription:
      "Developed a complete React-based tour and travel platform, Safar2You, featuring destination discovery, advanced package filtering, interactive package details, dynamic trip cost calculation, traveller registration, booking management, wishlists, and authentication. Implemented reusable components, form validation, mock API services, and local storage-based booking persistence with fully responsive layouts.",
    tech: ["React", "Tailwind CSS", "React Router", "Lucide React"],
    github: "", // TODO: add your repository link
    live: "https://safar2you.com/", // TODO: add your deployed link
  },
  {
    id: "dairy-ecommerce",
    title: "Dairy E-Commerce Web Application",
    icon: "🥛",
    image: "/images/shopsphere.png",
    description:
      "Developed ShopSphere, a full-stack Django-based dairy e-commerce application featuring user authentication, category-based product listings, product details, customer profiles, delivery address management, and a persistent shopping cart. Implemented Django's MVT architecture, SQLite database integration, custom models, database relationships, Django templates, user-specific functionality, and dynamic cart calculation logic.",
    longDescription:
      "Developed ShopSphere, a full-stack Django-based dairy e-commerce application featuring user authentication, category-based product listings, product details, customer profiles, delivery address management, and a persistent shopping cart. Implemented Django's MVT architecture, SQLite database integration, custom models, database relationships, Django templates, user-specific functionality, and dynamic cart calculation logic.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/harshdhakate2003", // TODO: replace with the repo link
    live: "",
  },
  {
    id: "ap-tyre-panel",
    title: "AP Tyre Admin and HR Panel",
    icon: "🛞",
    image: "",
    description:
      "An admin and HR panel with product, purchase, and payroll modules, connected to a Node.js backend through REST APIs.",
    longDescription:
      "AP Tyre is an admin and HR panel with product, purchase, and payroll modules. The product list opens a detail page that loads data from the product-by-ID API, the purchase order edit form is prefilled from the purchase API using the selected row's ID, and the payroll payslip view loads data for each employee from the payslip API. Data fetching uses custom hooks with React Query, a service layer for API calls, and a global store for shared state.",
    tech: ["React", "React Query", "REST API", "JavaScript"],
    github: "",
    live: "",
  },
  {
    id: "technova",
    title: "TechNova Inventory and Order Management System",
    icon: "📦",
    image: "",
    description:
      "An inventory and order management application with CRUD operations using REST APIs and the Fetch API.",
    longDescription:
      "An inventory and order management application with CRUD operations using REST APIs and the Fetch API. It includes search, filtering, sorting, pagination, and order management features, and uses Git and GitHub for version control and project management.",
    tech: ["HTML", "CSS", "JavaScript", "JSON Server", "Fetch API"],
    github: "https://github.com/harshdhakate2003", // TODO: replace with the repo link
    live: "",
  },
];

export const stats = [
  { value: String(projects.length), label: "Projects" },
  { value: "React.js", label: "Intern Developer" },
  { value: "7.37", label: "B.Tech CGPA" },
];

export const experience = [
  {
    role: "React.js Developer Intern",
    company: "TalentRise Technokrate Pvt. Ltd.",
    period: "Sep 2026 - Present",
    type: "Internship",
    location: "",
    color: "#06b6d4",
    points: [
      "Developing live web applications using React.js and JavaScript.",
      "Integrating REST APIs and testing API responses.",
      "Building reusable React components and debugging issues.",
      "Using Git and GitHub for version control.",
    ],
  },
  {
    role: "Python Full Stack Development Trainee",
    company: "Itpreneur Pvt. Ltd.",
    period: "Oct 2025 - Sep 2026",
    type: "Training",
    location: "Nagpur, Maharashtra",
    color: "#8b5cf6",
    points: [
      "Learned Python, Django, React, HTML5, CSS3, JavaScript, SQL, and MySQL.",
      "Practiced full stack development, CRUD operations, authentication, and REST API integration.",
    ],
  },
  {
    role: "Software Engineer",
    company: "eVerse.AI",
    period: "Jun 2025 - Sep 2025",
    type: "",
    location: "Nagpur, Maharashtra",
    color: "#f59e0b",
    points: [
      "Worked on the Frozen Semen Straw Counter, a computer vision project.",
      "Annotated 250+ images with Roboflow and created bounding boxes and labeled datasets for AI model training.",
      "Collaborated with the development team to prepare quality datasets.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Technology (B.Tech)",
    place: "Gurunanak Institute of Technology, Nagpur",
    score: "7.37 CGPA",
    field: "Computer Science & Engineering",
    period: "2022 - 2025",
    color: "#06b6d4",
  },
  {
    title: "Diploma in Computer Engineering",
    place: "Late Vasantdada Polytechnic, Nagpur",
    score: "76.46%",
    field: "Computer Engineering",
    period: "2019 - 2022",
    color: "#10b981",
  },
  // {
  //   title: "NPTEL Certifications",
  //   place: "Data Structures and Algorithms using Python, Python for Data Science",
  //   score: "",
  //   field: "",
  //   period: "",
  //   color: "#f59e0b",
  // },
];