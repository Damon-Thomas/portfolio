import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div
      className="flex justify-between items-center rounded-2xl h-16 px-4 m-2 sm:m-4 md:m-6 bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--themeBorder)] shadow-[var(--themeShadowColor)_0px_0px_10px_2px] hover:shadow-[var(--themeShadowColor)_0px_0px_15px_3px] transition-visual
        "
    >
      Other
      <ThemeSwitcher inLine={true} />
    </div>
  );
}
