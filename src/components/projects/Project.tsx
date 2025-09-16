export default function Project({
  title,
  description,
  features,
  techStack,
  image1,
  image2,
  image3,
}: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image1: string;
  image2?: string;
  image3?: string;
}) {
  return (
    <div className="bg-background p-4 rounded-lg shadow-[var(--themeShadowColor)_0px_0px_10px_2px]  text-left ">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src={image1}
          alt={`${title} screenshot 1`}
          className="rounded-lg"
        />
        {image2 && (
          <img
            src={image2}
            alt={`${title} screenshot 2`}
            className="rounded-lg"
          />
        )}
        {image3 && (
          <img
            src={image3}
            alt={`${title} screenshot 3`}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
