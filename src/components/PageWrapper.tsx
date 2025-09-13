"use client";

import ThemeSwitcher from "./header/ThemeSwitcher";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" max-w-[1500px] w-full h-screen relative p-2 sm:p-4 md:p-6 flex flex-col ] text-[var(--foreground)]">
      {children}
    </div>
  );
}
