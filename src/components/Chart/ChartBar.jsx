const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const hasValue = props.value > 0;

  return (
    <div className="h-full flex flex-col items-center flex-1 min-w-0">
      <div className="h-full w-full border border-ledger-border/60 rounded-lg bg-ledger-elevated/80 overflow-hidden flex flex-col justify-end">
        <div
          className={`w-full transition-all duration-500 ease-out rounded-t-sm ${
            hasValue
              ? "bg-gradient-to-t from-ledger-accent to-ledger-sky"
              : "bg-ledger-border/30"
          }`}
          style={{ height: barFillHeight }}
        />
      </div>
      <div
        className={`font-semibold text-[0.6rem] sm:text-xs text-center mt-2 truncate w-full ${
          hasValue ? "text-ledger-accent-light" : "text-ledger-muted/60"
        }`}
      >
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
