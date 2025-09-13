import ThemedImageWithSmoothShutter from "../ThemedImageWithSmoothShutter";

export default function Photo() {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[var(--foreground)]">
      <ThemedImageWithSmoothShutter
        lightSrc="/meBlue.png"
        darkSrc="/meBlack.jpg"
        alt="Picture of me"
        width={288}
        height={288}
        fill={false}
        priority={true}
        className="object-cover rounded-full"
        shutterDuration={700}
        shutterStyle="wipe"
      />
    </div>
  );
}
