import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-ledger-muted mb-3">
        Monthly Overview
      </h3>
      <div className="p-5 rounded-xl bg-ledger-bg/60 border border-ledger-border/50 flex justify-between items-end gap-2 h-44">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
