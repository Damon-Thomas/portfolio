"use client";

import LeftOpen from "@/components/icons/LeftOpen";
import LeftClose from "@/components/icons/LeftClose";

export default function SidebarToggle({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed top-5 left-4 z-50"
      style={{
        transform: sidebarOpen
          ? "translateX(calc(100vw - 4rem))"
          : "translateX(0)",
        transition: "transform 500ms ease-in-out",
      }}
    >
      <div
        className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {sidebarOpen ? (
          <LeftClose className="w-full h-full" />
        ) : (
          <LeftOpen className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
