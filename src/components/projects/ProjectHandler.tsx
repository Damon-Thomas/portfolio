import FeaturedProject from "./FeaturedProject";
import Project from "./Project";

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
      mainTech: ["TypeScript", "Next.js"],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "PostgreSQL",
        "ESLint",
        "VS Code",
        "Vercel",
        "npm",
        "OAuth",
        "Google",
        "Prisma",
      ],
      githubUrl: "https://github.com/Damon-Thomas/Zuno",
      video: "/projectImages/zuno/Zuno-Demo.mp4",
      image1: "/projects/zuno/Zuno Homepage.png",
      image2: "/projects/zuno/zuno-dashboard-full.png",
      mobile: "/projects/zuno/zuno-dashboard(iPhone SE).png",
      image4: "/projects/zuno/zuno-connections.png",
      image5: "/projects/zuno/zuno.damonthomas.dev-post.png",
      hostedLink: "https://zuno.damonthomas.dev/",
      brandImage: "/projects/zuno/zuno192x192.png",
    },
    {
      featured: false,
      title: "NHL Stat Cards",
      description: "A web app for creating custom NHL player stat cards.",
      features: [
        "Search for NHL players",
        "Generate and download stat cards",
        "Responsive design for all devices",
      ],
      mainTech: ["TypeScript", "React"],
      techStack: [
        "React",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "ESLint",
        "VS Code",
        "Vercel",
        "pnpm",
      ],
      githubUrl: "https://github.com/Damon-Thomas/NHL-Stat-Card-Builder",
      video: "/projects/nhl-stat-card/NHLStatCardDemo.mp4",
      image1: "/projects/nhl-stat-card/Sidney_Crosby_PIT_Card.png",
      image2: "/projects/nhl-stat-card/HelpPage.png",
      mobile: "/projects/nhl-stat-card/MobileCard.png",
      hostedLink: "https://nhl-stat-cards.vercel.app/",
      brandImage: "/projects/nhl-stat-card/NHLStatCard.png",
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
      mainTech: ["TypeScript", "React", "Node.js"],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "HTML5",
        "Express",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "PostgreSQL",
        "ESLint",
        "VS Code",
        "Vercel",
        "npm",
        "Prisma",
        "Jest",
        "JSON",
        "Postman",
        "Vercel",
        "Webpack",
      ],
      githubUrl: "https://github.com/Damon-Thomas/Terminal-Chat",
      video: "/projects/terminal-chat/TerminalChatDemoVideo.mp4",
      image1: "/projects/terminal-chat/terminalchat-messaging.png",
      image2: "/projects/terminal-chat/terminal-chat-profile.png",
      mobile: "/projects/terminal-chat/terminal-chat-mobile.png",
      hostedLink: "https://messaging-app-beta-six.vercel.app/",
      brandImage: "/projects/terminal-chat/chatFavicon.png",
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
      mainTech: ["TypeScript", "React", "Node.js"],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "HTML5",
        "Express",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "PostgreSQL",
        "ESLint",
        "VS Code",
        "Vercel",
        "npm",
        "Prisma",
        "JSON",
        "Postman",
        "Vercel",
      ],
      githubUrl: "https://github.com/Damon-Thomas/Modern-Murmur",
      video: "/projects/modern-murmur/MMDemoVideo.mp4",
      image1: "/projects/modern-murmur/blog-api-green-mu.vercel.app_.png",
      image2: "/projects/modern-murmur/blog-api-creator.vercel.app_.png",
      mobile:
        "/projects/modern-murmur/blog-api-creator.vercel.app_(iPhone SE).png",
      hostedLink: "https://blog-api-green-mu.vercel.app/",
      brandImage: "/projects/modern-murmur/MMSimple.png",
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
      mainTech: ["TypeScript", "React", "Node.js"],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "HTML5",
        "Express",
        "CSS3",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "PostgreSQL",
        "ESLint",
        "VS Code",
        "Vercel",
        "npm",
        "Prisma",
        "JSON",
        "Postman",
        "Vercel",
      ],
      githubUrl: "https://github.com/Damon-Thomas/Finding-Fiasco",
      video: "/projects/finding-fiasco/FFDemoVideo.mp4",
      image1: "/projects/finding-fiasco/finding-fiasco-game.png",
      image2: "/projects/finding-fiasco/FindingFiascoHome.png",
      mobile: "/projects/finding-fiasco/wheres-waldo-mobile.png",
      hostedLink: "https://wheres-waldo-gilt.vercel.app/",
      brandImage: "/projects/finding-fiasco/easyImg.png",
    },
  ];
  return (
    <div className="flex flex-col gap-72 my-8">
      {projects.map((project) => (
        <FeaturedProject
          featured={project.featured}
          key={project.title}
          title={project.title}
          description={project.description}
          features={project.features}
          mainTech={project.mainTech || []}
          techStack={project.techStack}
          video={project.video ?? ""}
          image1={project.image1}
          image2={project.image2}
          image3={project.mobile}
          githubUrl={project.githubUrl}
          hostedLink={project.hostedLink}
          brandImage={project.brandImage || ""}
        />
      ))}
    </div>
  );
}
