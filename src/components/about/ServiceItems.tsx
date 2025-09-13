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
    </div>
  );
}
