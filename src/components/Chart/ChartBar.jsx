const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="h-full flex flex-col items-center">
      <div className="h-full w-full border border-[#313131] rounded-xl bg-[#003049] overflow-hidden flex flex-col justify-end">
        <div
          className="bg-[#669bbc] w-full transition-all duration-300 ease-out"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="font-bold text-[0.5rem] text-center">{props.label}</div>
    </div>
  );
};
export default ChartBar;
