const DunsBadge = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm w-fit">
      {/* Shield Icon */}
      <svg
        width="40"
        height="46"
        viewBox="0 0 44 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M22 0L44 10V25C44 38.8 34.2 47.5 22 50C9.8 47.5 0 38.8 0 25V10L22 0Z"
          fill="url(#shieldGrad)"
        />
        <path
          d="M22 3L41 11.5V25C41 37.2 32.2 44.8 22 47C11.8 44.8 3 37.2 3 25V11.5L22 3Z"
          fill="#111827"
          stroke="#1e40af"
          strokeWidth="0.5"
        />
        <text
          x="22"
          y="19"
          textAnchor="middle"
          fill="#60a5fa"
          fontSize="7.5"
          fontWeight="700"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="0.5"
        >
          D-U-N-S
        </text>
        <line
          x1="10"
          y1="23"
          x2="34"
          y2="23"
          stroke="#1e40af"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <text
          x="22"
          y="31"
          textAnchor="middle"
          fill="#93c5fd"
          fontSize="5.5"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="600"
          letterSpacing="1"
        >
          REGISTERED
        </text>
        <circle cx="22" cy="39" r="5" fill="#1e40af" opacity="0.6" />
        <text
          x="22"
          y="41.5"
          textAnchor="middle"
          fill="white"
          fontSize="7"
          fontFamily="Arial, sans-serif"
        >
          ✓
        </text>
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="44" y2="50">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1a56db" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[1.5px]">
          D-U-N-S® Registered
        </span>
        <span className="text-lg font-bold text-foreground tracking-[2px] font-mono">
          14-507-4713
        </span>
        <span className="text-[11px] text-muted-foreground">
          Mysterious Enterprise LLC
        </span>
      </div>
    </div>
  );
};

export default DunsBadge;
