// All editable content. Only add facts Ahmed has confirmed.
// visibility values: public | private-profile | archived | operational | maintenance-paused (string or array)
window.SITE = {
  profiles: {
    github: {
      label: "GitHub", url: "https://github.com/Ahmed-Roshdi", visibility: "public",
      summary: "GitHub holds Ahmed’s public web projects, deployed applications, automation experiments, and public repositories."
    },
    gitlab: {
      label: "GitLab", url: "https://gitlab.com/Ahmed-Roshdi", visibility: "private-profile",
      summary: "GitLab is where Ahmed keeps systems-engineering notes, low-level experiments, and operating-systems-related work.",
      note: "The GitLab profile is currently private, so its repositories cannot be browsed from this site. Public projects will be listed here only once they are published."
    }
  },
  otherLinks: [], // confirmed only: { label, url }

  stages: [
    { title: "Current focus", status: "Current", intro: "The foundation everything else builds on.", items: [
      { name: "C fundamentals", desc: "The base of the whole path: the language most systems code is written in.", foundation: true },
      { name: "Pointers and memory", desc: "How C programs address, allocate, and free memory." },
      { name: "Compilation, linking, and debugging", desc: "From source file to running binary, and finding what went wrong." },
      { name: "Linux command-line workflow", desc: "The shell as the everyday study and development environment." }
    ]},
    { title: "Next foundation", status: "Next", intro: "Planned once the current focus is solid.", items: [
      { name: "Data structures in C", desc: "Building the basic structures by hand." },
      { name: "Processes and system calls", desc: "How programs run and ask the kernel for services." },
      { name: "Computer architecture", desc: "How CPUs, caches, and memory execute programs." },
      { name: "Resource management", desc: "Ownership and cleanup of memory, files, and handles." }
    ]},
    { title: "Later topics", status: "Later", intro: "Not started. Listed to show the direction.", items: [
      { name: "Virtual memory" }, { name: "Filesystems" }, { name: "Concurrency" },
      { name: "Kernel concepts" }, { name: "Systems security" }
    ]}
  ],

  // project fields: name, platform, category, description, technologies, status, url, visibility, featured, learningOutcome
  projects: [
    {
      name: "OffSec-Terminal-Forge", platform: "GitHub", featured: true,
      category: "Automation / generative media / cyberpunk fiction",
      description: "An experimental automated visual and dialogue-generation pipeline built with Python and GitHub Actions. It generates maps, dialogue scenes, ASCII-based visual sequences, and continuously updated artifacts.",
      context: "It began as a hidden visual meme embedded in Ahmed’s GitHub profile. The image links to Popcat as part of the project’s deliberate misdirection.",
      sequence: ["ASCII scenes", "Maps", "Generated machine dialogues", "A final “I’m not a robot” joke"],
      sequenceLabel: "The animated output moves through",
      scope: "This is a creative automation project. It is not an operating-systems project, and it is not security research.",
      technologies: ["Python", "Pillow", "GitHub Actions", "Scheduled workflows"],
      status: "Operational output pipeline; interactive development may be paused.",
      url: "https://github.com/Ahmed-Roshdi/OffSec-Terminal-Forge",
      visibility: ["public", "operational", "maintenance-paused"]
    },
    {
      name: "Islamic-Search-Engine", platform: "GitHub", category: "Web tool",
      description: "A static HTML, CSS, and JavaScript interface that builds restricted search queries over selected Islamic sources and sends them to external search engines. It is not an independent search index or crawler.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/Ahmed-Roshdi/Islamic-Search-Engine", visibility: ["public"]
    },
    {
      name: "Info.net", platform: "GitHub", category: "Personal website",
      description: "A multi-section personal website project with Arabic and English pages. An earlier personal-site project.",
      url: "https://github.com/Ahmed-Roshdi/Info.net", visibility: ["public"]
    },
    {
      name: "md", platform: "GitHub", category: "Knowledge publication",
      description: "A Quartz-based digital garden and knowledge base. It publishes notes; it is not an operating-systems implementation.",
      technologies: ["Quartz"],
      url: "https://github.com/Ahmed-Roshdi/md", visibility: ["public"]
    }
  ],

  principles: [
    { name: "Understanding before abstraction", desc: "Learn what a layer does before relying on it." },
    { name: "First-principles learning", desc: "Start from the machine and build up, instead of memorizing recipes." },
    { name: "Small inspectable projects", desc: "Keep projects small enough to read, debug, and fully explain." },
    { name: "Documentation and reproducible experiments", desc: "Write down what was run, so anyone can repeat it." },
    { name: "Linux as a study and development environment", desc: "Use the system being studied as the place to study it." }
  ]
};
