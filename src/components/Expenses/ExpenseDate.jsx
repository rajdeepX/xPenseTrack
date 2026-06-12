const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="flex flex-col w-22 h-22 shrink-0 border border-ledger-accent/30 bg-gradient-to-b from-ledger-elevated to-ledger-bg text-ledger-text rounded-xl items-center justify-center shadow-inner">
      <div className="text-[0.65rem] font-bold uppercase tracking-wider text-ledger-accent">
        {month}
      </div>
      <div className="text-2xl font-extrabold leading-none my-0.5">{day}</div>
      <div className="text-[0.65rem] text-ledger-muted">{year}</div>
    </div>
  );
};

export default ExpenseDate;
