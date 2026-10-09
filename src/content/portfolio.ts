import type { Portfolio } from "@/types/portfolio";

// Single source of truth for all portfolio content.
export const portfolio: Portfolio = {
  profile: {
    name: "Collins Woelinam Sitty",
    role: "Web & Mobile Developer · STEM Instructor",
    tagline:
      "Building useful digital experiences and helping the next generation discover the power of technology.",
    location: "Ho, Volta Region, Ghana",
    email: "woelinamcollins@gmail.com",
    resumeUrl: "",
    // Drop your photo into /public and point this at it, e.g. "/profile.jpg".
    avatarUrl: "/images/headshot.png",
    socials: [
      { label: "GitHub", href: "https://github.com/CollinsWoelinam" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/CollinsWoelinam",
      },
    ],
  },

  about: {
    paragraphs: [
      "I'm a web and mobile developer and STEM instructor with a Bachelor of Technology in ICT from Ho Technical University. I enjoy building useful digital products, creating intuitive user interfaces, and exploring how technology can solve everyday problems.",
      "My experience spans web development, Flutter and React Native mobile applications, and data-backed applications using Supabase and Firebase. I also work with Python and Django for backend development. Alongside software development, I teach and facilitate practical STEM activities, helping learners explore programming, electronics, and problem-solving through hands-on projects.",
      "I enjoy combining building and teaching: turning ideas into working products, making technology easier to understand, and helping people develop the skills and confidence to create things of their own.",
    ],
    highlights: [
      { value: "3", label: "Areas of work: development, STEM & coaching" },
      { value: "3", label: "JS technologies: JavaScript, React & Next.js" },
      { value: "1", label: "BTech in ICT, Ho Technical University" },
    ],
  },

  skills: [
    {
      category: "Front-end Development",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ReactJS",
        "Next.js",
        "Tailwind CSS",
        "Responsive design",
      ],
    },
    {
      category: "Mobile App Development",
      items: ["Flutter", "Dart", "React Native"],
    },
    { category: "Backend Development", items: ["Node.js", "Express", "Python", "Django"] },
    {
      category: "Databases & Data",
      items: ["Supabase", "PostgreSQL", "Firebase", "SQL"],
    },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker"] },
    {
      category: "STEM, Electronics & Education",
      items: [
        "Arduino",
        "ESP32",
        "Scratch",
        "Firefly IO",
        "Teachable Machine",
        "STEMize kits",
        "STEM facilitation",
      ],
    },
  ],

  experience: [
    {
      company: "LIFE-MAC Africa",
      role: "Front-end Developer & STEM Instructor",
      period: "Present",
      description:
        "Contribute to website development and improvement while facilitating practical STEM learning activities, including a website rebuild with the Digital Innovation Lead and hands-on learning with coding, electronics, and STEM education kits.",
      stack: ["Vite", "Scratch", "Arduino", "Firefly IO", "STEMize kits"],
    },
    {
      company: "GSTEP 2026",
      role: "Technical Coach",
      period: "2026",
      description:
        "Support practical technology learning and project development, helping learners engage with technical concepts through guided, hands-on activities.",
      stack: [],
    },
    {
      company: "Trebnet Digital Agency",
      role: "Intern",
      period: "Oct — Dec 2023",
      description:
        "Collaborated with the team to build a news website, gaining practical experience in website development and contributing to a real-world digital project.",
      stack: [],
    },
    {
      company: "GCOM Pre-university",
      role: "Front-end Technologies Instructor",
      period: "Oct — Dec 2022",
      description:
        "Taught front-end development technologies, helping learners build their understanding of web development.",
      stack: [],
    },
  ],

  projects: [
    {
      title: "HealthAtlas",
      description:
        "A healthcare facility locator that helps users find hospitals, clinics, pharmacies, and healthcare services, using location and map features to identify facilities and navigate to them.",
      stack: ["Flutter", "Supabase", "Google Maps"],
      repoUrl: "https://github.com/CollinsWoelinam/HealthAtlas",
      featured: true,
    },
    {
      title: "LIFE-MAC Africa Website Rebuild",
      description:
        "A website improvement project presenting LIFE-MAC Africa and its community-empowerment and educational work online.",
      stack: ["Vite"],
      liveUrl: "https://lifemac.org",
    },
    {
      title: "CCT Business Consult Website",
      description:
        "A business website translating an organisation's needs into a useful online presence.",
      stack: [],
      liveUrl: "https://www.cctbusinessconsult.com",
    },
    {
      title: "Torchbearers Books & Stationery Services",
      description:
        "Website for a Ghanaian bookshop and reading community, showcasing textbooks and stationery and inviting readers to join the community.",
      stack: ["React", "Vite"],
      liveUrl: "https://www.tbssgh.com",
    },
    {
      title: "ATLAS-CLOP — 2D/3D Room Visualisation",
      description:
        "A collaborative project improving the room visualisation interface, including adjusting room tile dimensions and making the 2D room outline visible.",
      stack: ["Vite", "Django"],
      repoUrl: "https://github.com/eugene-sew/ATLAS-CLOP",
    },
  ],

  education: [
    {
      institution: "Ho Technical University",
      qualification: "BTech in Information & Communication Technology",
      status: "Graduated",
    },
  ],
};
