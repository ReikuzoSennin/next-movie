function ProgressRing() {
  
    return (
      <svg width="300" height="285">
        <circle
          r="135"
          cx="150"
          cy="150"
          fill="transparent"
          stroke="grey"
          strokeWidth="2"
          className="absolute rounded-full border-grey-400 dark:border-grey-600"
        />
        <circle
          r="133"
          cx="150"
          cy="150"
          fill="transparent"
          stroke="#fed530"
          strokeLinecap="round"
          strokeWidth="6"
          strokeDasharray="600px"
          className="absolute rounded-full border-fed530 dark:border-fed530 opacity-75"
        />
        <circle
          r="60"
          cx="150"
          cy="150"
          fill="#fed530"
          className="absolute rounded-full bg-fed530 dark:bg-fed530"
        />
        <polygon
          points="140,135 163,150 140,165"
          stroke="black"
          strokeWidth="4"
          className="absolute rotate-[-90]"
          fill="transparent"
        />
      </svg>
    );
  }
  
  export default ProgressRing;
  