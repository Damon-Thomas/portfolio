import { useEffect, useRef, useState } from "react";
import "./slideAnimation.css";

export default function InfiniteLooper({
  speed,
  direction,
  children,
  id = "looper",
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
  id?: string;
}) {
  const [looperInstances, setLooperInstances] = useState(3);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function setupInstances() {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    // Calculate how many instances we need to fill the screen plus extras
    const singleInstanceWidth = width / looperInstances;
    const neededInstances = Math.ceil(parentWidth / singleInstanceWidth) + 2;

    if (looperInstances < neededInstances) {
      setLooperInstances(Math.max(3, neededInstances));
    }
  }

  useEffect(() => {
    setupInstances();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);
    return () => window.removeEventListener("resize", setupInstances);
  }, []);

  return (
    <div className="looper w-full" ref={outerRef}>
      <div
        className="looper__innerList flex gap-8"
        ref={innerRef}
        data-animate="true"
        style={
          {
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
            "--translate-percentage": `-${100 / looperInstances}%`,
          } as React.CSSProperties & { "--translate-percentage": string }
        }
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={`${id}-instance-${ind}`}
            className="looper__listInstance flex gap-8"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
