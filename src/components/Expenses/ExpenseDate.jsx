const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="flex flex-col w-[88px] h-[88px] border border-[#ececec] bg-[#2a2a2a] text-white rounded-xl items-center justify-center">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
