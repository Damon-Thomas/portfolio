export default function Skills() {
  return (
    <div className="bg-background text-foreground w-full flex justify-center">
      <div className="py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-6 w-full max-w-6xl">
        <div className="col-span-full flex-col flex gap-3 md:gap-6 ">
          <h3 className="text-xl md:text-3xl w-full font-bold  ">My Skills</h3>
          <p className="max-w-3xl">
            I&apos;ve gained these skills through focused and intentional study
            reinforced by real-world projects and applications. I take my
            personal development seriously, and I strive to develop and deepen
            my understanding of these skills every day.
          </p>
        </div>
        <h4 className="font-bold text-lg col-span-full">Essentials</h4>
        <ul className="col-span-full grid gap-4 [grid-template-columns:repeat(auto-fit,150px)] justify-start px-3 md:px-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Github</li>
        </ul>

        <h4 className="font-bold text-lg col-span-full">Expanded</h4>
        <ul className="col-span-full grid gap-4 [grid-template-columns:repeat(auto-fit,150px)] justify-start px-3 md:px-6">
          <li>React</li>
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>Next.js </li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>Express.js</li>
          <li>Prisma ORM</li>
          <li>JWT | BCrypt | OAuth</li>
          <li>Jest | SuperTest</li>
        </ul>
      </div>
    </div>
  );
}
