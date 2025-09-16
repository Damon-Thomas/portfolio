export default function ProjectHandler() {
  const projects = [
    {
      featured: true,
      title: "Zuno",
      description: "A social media platform for connecting and discovering.",
      features: [
        "User authentication and profiles",
        "Like, comment, and collaborate",
        "Follow other users",
        "Meet new people and make friends",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Damon-Thomas/Zuno",
      image1: "/projects/zuno/Zuno Homepage.png",
      image2: "/projects/zuno/zuno-dashboard-full.png",
      mobile: "/projects/zuno/zuno-dashboard(iPhone SE).png",
      image4: "/projects/zuno/zuno-connections.png",
      image5: "/projects/zuno/zuno.damonthomas.dev-post.png",
      hostedLink: "https://zuno.damonthomas.dev/",
    },
    {
      featured: false,
      title: "NHL Stat Card Creator",
      description: "A web app for creating custom NHL player stat cards.",
      features: [
        "Search for NHL players",
        "Generate and download stat cards",
        "Responsive design for all devices",
      ],
      techStack: ["React", "TypeScript", "CSS"],
      githubUrl: "https://github.com/Damon-Thomas/NHL-Stat-Card-Builder",
      image1: "/projects/nhl-stat-card/Sidney_Crosby_PIT_Card.png",
      image2: "/projects/nhl-stat-card/HelpPage.png",
      mobile: "/projects/nhl-stat-card/MobileCard.png",
      hostedLink: "https://nhl-stat-cards.vercel.app/",
    },
    {
      featured: false,
      title: "Terminal Chat",
      description:
        "A terminal-based chat application for real-time communication.",
      features: [
        "Create your profile",
        "User authentication",
        "Multiple chat rooms",
        "Meet new people by interests",
      ],
      techStack: ["Node.js", "React", "Express"],
      githubUrl: "https://github.com/Damon-Thomas/Terminal-Chat",
      image1: "/projects/terminal-chat/terminalchat-messaging.png",
      image2: "/projects/terminal-chat/terminal-chat-profile.png",
      mobile: "/projects/terminal-chat/terminal-chat-mobile.png",
      hostedLink: "https://messaging-app-beta-six.vercel.app/",
    },
    {
      featured: false,
      title: "Modern Murmur",
      description: "A minimalist blogging platform for sharing your thoughts.",
      features: [
        "Create and manage blog posts",
        "User authentication",
        "Responsive design for all devices",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Damon-Thomas/Modern-Murmur",
      image1: "/projects/modern-murmur/blog-api-green-mu.vercel.app_.png",
      image2: "/projects/modern-murmur/blog-api-creator.vercel.app_.png",
      mobile:
        "/projects/modern-murmur/blog-api-creator.vercel.app_(iPhone SE).png",
      hostedLink: "https://blog-api-green-mu.vercel.app/",
    },
    {
      featured: false,
      title: "Finding Fiasco",
      description: "A Where's Waldo style finding game.",
      features: [
        "Find the hidden object in each scene",
        "Global leaderboard to track high scores",
        "Responsive design for all devices",
      ],
      techStack: ["React", "TypeScript", "CSS"],
      githubUrl: "https://github.com/Damon-Thomas/Finding-Fiasco",
      image1: "/projects/finding-fiasco/finding-fiasco-game.png",
      image2: "/projects/finding-fiasco/FindingFiascoHome.png",
      mobile: "/projects/finding-fiasco/wheres-waldo-mobile.png",
      hostedLink: "https://wheres-waldo-gilt.vercel.app/",
    },
  ];
  return (
    <div className="flex flex-col gap-8 my-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className={
            project.featured
              ? "border-4 border-[var(--accent)] rounded-lg p-4"
              : ""
          }
        >
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <h3 className="text-2xl font-semibold mt-2 mb-1">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold mt-2 mb-1">Tech Stack:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <img
              src={project.image1}
              alt={`${project.title} screenshot 1`}
              className="rounded-lg"
            />
            {project.image2 && (
              <img
                src={project.image2}
                alt={`${project.title} screenshot 2`}
                className="rounded-lg"
              />
            )}
            {project.mobile && (
              <img
                src={project.mobile}
                alt={`${project.title} screenshot 3`}
                className="rounded-lg"
              />
            )}
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
              >
                View on GitHub
              </a>
            )}
            {project.hostedLink && (
              <a
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
