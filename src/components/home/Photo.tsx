import ThemedImageWithSmoothShutter from "../ThemedImageWithSmoothShutter";

export default function Photo() {
  return (
    <div className="relative photo-container group w-80 h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 lg:w-128 lg:h-128 flex items-center justify-center">
      {/* Main photo container - positioned first so orbits are on top */}
      <div className="relative z-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[var(--foreground)]">
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

      {/* Orbital system positioned on top */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 320 320">
          {/* Outer circle path */}
          <circle
            cx="160"
            cy="160"
            r="156"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1"
            opacity="0.2"
            className="orbit-circle"
          />

          {/* Middle circle path */}
          <circle
            cx="160"
            cy="160"
            r="131"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1"
            opacity="0.2"
            className="orbit-circle"
          />

          {/* Inner circle path */}
          <circle
            cx="160"
            cy="160"
            r="106"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1"
            opacity="0.2"
            className="orbit-circle"
          />

          {/* Outer ball - single dot only */}
          <g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 160 160"
              to="360 160 160"
              dur="12s"
              repeatCount="indefinite"
            />
            <circle
              cx="316"
              cy="160"
              r="4"
              fill="var(--foreground)"
              opacity="0.8"
              className="orbit-ball"
            />
          </g>

          {/* Middle ball - single dot only */}
          <g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 160 160"
              to="-360 160 160"
              dur="16s"
              repeatCount="indefinite"
            />
            <circle
              cx="291"
              cy="160"
              r="4"
              fill="var(--foreground)"
              opacity="0.7"
              className="orbit-ball"
            />
          </g>

          {/* Inner ball - single dot only */}
          <g>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 160 160"
              to="360 160 160"
              dur="8s"
              repeatCount="indefinite"
            />
            <circle
              cx="266"
              cy="160"
              r="4"
              fill="var(--foreground)"
              opacity="0.6"
              className="orbit-ball"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
