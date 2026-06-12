import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const yearlyTotal = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <section className="my-6 mx-auto w-200 max-w-[95%]">
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-ledger-text">Your Expenses</h2>
            <p className="text-sm text-ledger-muted mt-1">
              {filteredExpenses.length} transaction
              {filteredExpenses.length !== 1 ? "s" : ""} in {filteredYear}
            </p>
          </div>
          {filteredExpenses.length > 0 && (
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-ledger-muted font-semibold">
                Yearly Total
              </p>
              <p className="text-2xl font-bold text-ledger-accent-light">
                Rs.{yearlyTotal.toFixed(2)}
              </p>
            </div>
          )}
        </div>

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />

        {filteredExpenses.length === 0 ? (
          <div className="text-center py-12 mb-6 rounded-xl border border-dashed border-ledger-border bg-ledger-bg/40">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-lg font-semibold text-ledger-text">
              Nothing to track here
            </p>
            <p className="text-sm text-ledger-muted mt-1">
              No expenses found for {filteredYear}. Try another year or add a
              new expense.
            </p>
          </div>
        ) : (
          <ExpensesChart expenses={filteredExpenses} />
        )}

        <div className="space-y-3 mt-6">
          {filteredExpenses.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Expenses;
