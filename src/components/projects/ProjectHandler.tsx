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
      techStack: ["React", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Damon-Thomas/Zuno",
      video: "/projectImages/zuno/Zuno-Demo.mp4",
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
      {projects.map((project) =>
        project.featured ? (
          <FeaturedProject
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            video={project.video ?? ""}
            image1={project.image1}
            image2={project.image2}
            image3={project.mobile}
            githubUrl={project.githubUrl}
            hostedLink={project.hostedLink}
          />
        ) : (
          <Project
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            image1={project.image1}
            image2={project.image2}
            image3={project.mobile}
            githubUrl={project.githubUrl}
            hostedLink={project.hostedLink}
          />
        )
      )}
    </div>
  );
}
