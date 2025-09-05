export function Feature({
  title = "Open Source Software",
}: {
  title?: string;
}) {
  return (
    <div className="flex-1 h-fit p-4 m-4 border border-border rounded-lg bg-card text-card-foreground shadow-sm">
      <h1 className="text-lg sm:text-xl font-black">{title}</h1>
      <div className="">
        <p className="text-sm sm:text-base">
          I love building open source software that helps developers create
          better applications. Here are some of my contributions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <a
              href=""
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1
            </a>
            : A brief description of the project and its purpose.
          </li>
          <li>
            <a
              href=""
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2
            </a>
            : A brief description of the project and its purpose.
          </li>
        </ul>
        ;
      </div>
      <div>
        <button className="font-black text-yellow-600">
          See all {title} work
        </button>
      </div>
    </div>
  );
}
