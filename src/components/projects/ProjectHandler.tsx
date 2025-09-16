export default function ProjectHandler() {
  const projects = [
    {
      title: "Zuno",
      description: "A social media platform for connecting and discovering.",
      features: [
        "User authentication and profiles",
        "Like, comment, and collaborate",
        "Follow other users",
        "Meet new people and make friends",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Damon-Thomas/Zuno",
      image1: "/projects/zuno/zuno-1.png",
      image2: "/projects/zuno/zuno-2.png",
      image3: "/projects/zuno/zuno-3.png",
      hostedLink: "https://zuno.damonthomas.dev/",
    },
  ];
  return <div>ProjectHandler</div>;
}
