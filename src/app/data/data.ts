export const PROFILE = {
    handle: "@cs_student",
    name: "CS @ USyd",
    location: "Sydney, AU",
    status: "Seeking Software Internship",
    tagline: "Logic-first engineer bridging elite competitive programming with industrial full-stack development.",
    //tagline: "Aspiring software engineer aiming to become a full-stack developer, focused on modern web development while exploring interests in AI/ML and cybersecurity.",
    //
    //focus:
      //  "Rigorous CS student at USyd — mastering the Next.js & Supabase ecosystem while applying a logic-first, algorithmic foundation to every system I build.",
    focus: "Computer Science student at the University of Sydney — with a strong algorithmic foundation developed through competitive programming experience. Currently focused on building modern web applications using the Next.js and React framework.",
    bio:
        "My foundation is in competitive programming, where I was a two-time APIO national representative and selected for IOI and IMO training camps. This experience built a strong algorithmic and problem-solving mindset, which led me to explore broader areas of programming. I am currently focused on web development, scaling into the Next.js ecosystem to build modern applications and transition toward production-level systems.",
    seeking: "Open to software developer internships where rapid learning velocity and technical rigour are valued.",
    transition: {
        input: {
            label: "FOUNDATION",
            title: "Competitive Programming",
            lines: [
                "algorithms.master(C++)",
                "olympiad.represent(APIO, 2x)",
                "codeforces.grind()",
            ],
        },
        output: {
            label: "APPLICATION",
            title: "Industrial Engineering",
            lines: [
                "nextjs.ship(production)",
                "fullstack_architecture.build()",
                "internship.acquire(2025)",
            ],
        },
    },
};

export const TERMINAL_BOOT = [
    "$ ./portfolio --init",
    "[ok] loading identity :: USyd/CS",
    "[ok] mounting /projects",
    "[ok] linking /credentials",
    "[ok] session → ready",
];

export const TECH_STACK = [
    // Professional
    { name: "Next.js / React", level: 60, category: "Professional" },
    { name: "TypeScript", level: 78, category: "Professional" },
    { name: "Tailwind CSS", level: 84, category: "Professional" },
    { name: "Prisma / Postgres", level: 60, category: "Professional" },
    { name: "Python", level: 86, category: "Professional" },

    // Algorithmic
    { name: "C++", level: 93, category: "Algorithmic" },
    { name: "Data Structures", level: 78, category: "Algorithmic" },
    { name: "Competitive Programming", level: 88, category: "Algorithmic" },
    { name: "Algorithms & Complexity", level: 80, category: "Algorithmic" },
];

export const PROJECTS = [
    {
        id: "01",
        title: "MealDeals",
        description:
            "1st prize winner at Hack Node Australia. A full-stack solution architected, built, and shipped in under a months",
        tags: ["Next.js", "React", "Vite", "Node.js", "Llama 3.2", "PostgreSQL"],
        category: "Full-Stack / AI",
        metric: "Done",
        // links: { github: "https://github.com/ZH-170/MealDeals", live: "#" },
        links: { github: "https://github.com/ZH-170/MealDeals" },
    },
    {
        id: "02",
        title: "Bookoo",
        description:
            "Book trading website for specific users.",
        tags: ["Next.js", "React", "Prisma", "PostgreSQL"],
        category: "Full-Stack",
        metric: "Under development",
        links: {},
    },
    {
        id: "03",
        title: "Personal Library",
        description:
            "A personal library to keep the books and movies that you like the most.",
        tags: ["Python", "PyMOL", "Bioinformatics"],
        category: "Full-Stack",
        metric: "Under development",
        links: {},
    },
];

export const ACHIEVEMENTS = [
    {
        year: "2025",
        title: "1st Prize — Hack Node Australia",
        detail:
            "Won 1st place in my first ever hackathon during my very first semester of CS — proof of rapid learning velocity applied under pressure.",
    },
    {
        year: "2024–2025",
        title: "Two-Time APIO National Representative",
        detail:
            "Represented Malaysia twice at the Asian-Pacific Informatics Olympiad — among the nation's top 30 competitive programmers.",
    },
    {
        year: "2023-2025",
        title: "IOI Training Camp — National Selection",
        detail:
            "Nationally selected for the International Olympiad in Informatics training camp, focusing on advanced algorithmic problem-solving.",
    },
    {
        year: "2023/24",
        title: "IMO Training Camp — National Selection",
        detail:
            "Nationally selected for the International Mathematical Olympiad training camp — elite mathematical reasoning under competition conditions.",
    },
];

export const TIMELINE = [
    {
        period: "2025 — Present",
        role: "B.Sc. | Computer Science | Biochemistry and Molecular Biology",
        institution: "The University of Sydney",
        description:
            "Rigorous full-time CS degree alongside active project development. Won 1st prize at the USyd hackathon in semester one. Currently mastering the Next.js & Supabase ecosystem — targeting a software developer internship.",
        isAcademic: true,
    },
    {
        period: "2025",
        role: "Software developer intern",
        institution: "AutoCount Sdn Bhd",
        description:
            "Contribute to maintaining and improving existing software systems. Developed and modified features using React and C# to support application functionality.",
        isAcademic: false,
    },
    {
        period: "2019–2024",
        role: "Science Stream Student",
        institution: "Hin Hua High School, Malaysia",
        description:
            "Rigorous full-time CS degree alongside active project development. Won 1st prize at the USyd hackathon in semester one. Currently mastering the Next.js & Supabase ecosystem — targeting a software developer internship.",
        isAcademic: true,
    },
];

