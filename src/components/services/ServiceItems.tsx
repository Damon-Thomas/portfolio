import { services } from "@/app/content/about";

export default function ServiceItems() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-2 sm:gap-4 md:gap-6 lg:gap-8 my-4">
      {services.map((service) => (
        <div key={service.title}>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className=" "> {service.description}</p>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <button className="bg-foreground p-4 !text-[var(--backgroundText)] font-black rounded-lg hover:cursor-pointer hover:shadow-[var(--themeShadowColor)_0px_0px_10px_3px] transition-visual">
          Get A Quote Now!
        </button>
      </div>
    </div>
  );
}
