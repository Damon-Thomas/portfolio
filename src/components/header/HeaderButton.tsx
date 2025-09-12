"use client";

export default function HeaderButton({
  children,
  onClick,
  small = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2  cursor-pointer min-h-14 bg-[var(--buttonBackground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--buttonText)]  shadow-[var(--buttonShadowColor)_0px_0px_5px_1px] hover:shadow-[var(--buttonShadowColor)_0px_0px_8px_2px] transition-visual active:scale-95 ${
        small ? "border-b-1 border-[var(--foreground" : "rounded-lg"
      }`}
    >
      {children}
    </button>
  );
}
