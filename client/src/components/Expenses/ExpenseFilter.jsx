const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="mb-6 p-4 rounded-xl bg-ledger-bg/50 border border-ledger-border/50">
      <div className="flex w-full items-center justify-between gap-4">
        <label className="font-semibold text-sm text-ledger-muted shrink-0">
          Filter by year
        </label>
        <select
          className="font-inherit py-2.5 px-4 font-semibold rounded-xl border border-ledger-border bg-ledger-elevated text-ledger-text cursor-pointer focus:outline-none focus:ring-2 focus:ring-ledger-accent/50 transition-colors"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
