export default function SkillItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-[250px_minmax(250px,_1fr)_100px]  gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
      <h3 className="text-lg font-semibold max-w-[250px]">{title}</h3>
      <p className=" "> {description}</p>
    </div>
  );
}
