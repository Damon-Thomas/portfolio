import { useEffect, useRef, useState } from "react";
import "./slideAnimation.css";

export default function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(2); // Start with 2 for seamless loop
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function setupInstances() {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    console.log(
      "Inner",
      innerRef.current.getBoundingClientRect(),
      "Outer,",
      outerRef.current.getBoundingClientRect()
    );

    const instanceWidth = width / innerRef.current.children.length;

    // Ensure we have enough instances to fill the screen plus one extra for seamless loop
    const minInstances = Math.ceil(parentWidth / (width / looperInstances)) + 1;

    if (looperInstances < minInstances) {
      setLooperInstances(Math.max(2, minInstances)); // Always at least 2 instances
      console.log("Setting instances to:", Math.max(2, minInstances));
    }
  }

  useEffect(() => {
    setupInstances();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, []);

  return (
    <div className="looper w-full" ref={outerRef}>
      <div
        className="looper__innerList w-fit flex gap-8"
        ref={innerRef}
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance w-full flex gap-8"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
