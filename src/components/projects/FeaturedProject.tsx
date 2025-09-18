export default function FeaturedProject({
  title,
  description,
  features,
  techStack,
  video,
  image1,
  image2,
  image3,
  githubUrl,
  hostedLink,
}: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  video: string;
  image1: string;
  image2?: string;
  image3?: string;
  githubUrl: string;
  hostedLink: string;
}) {
  return (
    <div
      key={title}
      className={`
            
              "border-4 border-[var(--accent)] rounded-lg p-4"
              
          } `}
    >
      <h2 className="text-3xl font-bold mb-2 flex justify-start">{title}</h2>
      <p className="mb-4 flex justify-start">{description}</p>
      <img src={image1} alt={`${title} screenshot 1`} className="rounded-lg" />
      <h3 className="text-2xl font-semibold mt-2 mb-1">Features:</h3>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold mt-2 mb-1">Tech Stack:</h3>
      <ul className="list-disc list-inside mb-4">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {video && (
          <img src={video} alt={`${title} video demo`} className="rounded-lg" />
        )}
        {image1 && (
          <img
            src={image1}
            alt={`${title} screenshot 1`}
            className="rounded-lg"
          />
        )}
        {image2 && (
          <img
            src={image2}
            alt={`${title} screenshot 2`}
            className="rounded-lg"
          />
        )}
        {
          <img
            src={image3}
            alt={`${title} screenshot 3`}
            className="rounded-lg"
          />
        }
      </div>
      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
          >
            View on GitHub
          </a>
        )}
        {hostedLink && (
          <a
            href={hostedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
}
