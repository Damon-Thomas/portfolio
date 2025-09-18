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
    // <div
    //   key={title}
    //   className={`

    //           "border-4 border-[var(--accent)] rounded-lg p-4"

    //       } `}
    // >
    //   <h2 className="text-3xl font-bold mb-2 flex justify-start">{title}</h2>
    //   <p className="mb-4 flex justify-start">{description}</p>
    //   <img src={image1} alt={`${title} screenshot 1`} className="rounded-lg" />
    //   <h3 className="text-2xl font-semibold mt-2 mb-1">Features:</h3>
    //   <ul className="list-disc list-inside mb-4">
    //     {features.map((feature, index) => (
    //       <li key={index}>{feature}</li>
    //     ))}
    //   </ul>
    //   <h3 className="text-2xl font-semibold mt-2 mb-1">Tech Stack:</h3>
    //   <ul className="list-disc list-inside mb-4">
    //     {techStack.map((tech, index) => (
    //       <li key={index}>{tech}</li>
    //     ))}
    //   </ul>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
    //     {video && (
    //       <video
    //         src={video}
    //         typeof="video/webm"
    //         className="rounded-lg"
    //         autoPlay
    //         controls
    //         loop
    //         playsInline
    //       />
    //     )}
    //     {image1 && (
    //       <img
    //         src={image1}
    //         alt={`${title} screenshot 1`}
    //         className="rounded-lg"
    //       />
    //     )}
    //     {image2 && (
    //       <img
    //         src={image2}
    //         alt={`${title} screenshot 2`}
    //         className="rounded-lg"
    //       />
    //     )}
    //     {
    //       <img
    //         src={image3}
    //         alt={`${title} screenshot 3`}
    //         className="rounded-lg"
    //       />
    //     }
    //   </div>
    //   <div className="flex gap-4">
    //     {githubUrl && (
    //       <a
    //         href={githubUrl}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
    //       >
    //         View on GitHub
    //       </a>
    //     )}
    //     {hostedLink && (
    //       <a
    //         href={hostedLink}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accentHover)] transition"
    //       >
    //         Visit Site
    //       </a>
    //     )}
    //   </div>
    // </div>

    //Featured Project Section
    <div className="grid grid-cols-2 gap-2 sm:gap-8 md:gap-16 p-2 sm:p-4 md:p-6 rounded-lg glass">
      {/* Left column */}
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-8 ">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-8">
          <div className="flex flex-col bg-background p-2 sm:p-4 md:p-6 baseShadow">
            <h2 className="text-2xl sm:text-4xl md:text-8xl font-black text-left">
              {title}
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-left">
              {description}
            </p>
          </div>
          <div className="p-2 sm:p-4 md:p-6 bg-background baseShadow">
            <h3 className="text-left font-extrabold text-lg sm:text-2xl md:text-4xl">
              Features
            </h3>
            <ul className="grid grid-cols-2 w-full">
              {features.map((feature) => (
                <li className="text-left">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={image1}
          alt=""
          className="border-2 border-foreground rounded-lg mx-4"
        />
      </div>
      {/* Right Column */}
      <div className="flex flex-col h-fit rounded-lg hover:cursor-pointer mx-4 baseShadow">
        {video && (
          <video
            src={video}
            typeof="video/webm"
            className="rounded-lg"
            autoPlay
            controls
            loop
            playsInline
            muted
          />
        )}
      </div>
    </div>
  );
}
