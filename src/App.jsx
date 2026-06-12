import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [
  {
    id: "e1",
    title: "Paper",
    amount: 940.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 7990.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2940.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);

  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [{ ...expense, id: Math.random().toString() }, ...prevExpenses];
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ledger-bg via-[#0f172a] to-[#131829]">
      <header className="pt-12 pb-8 px-4 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-ledger-accent/20 border border-ledger-accent/40 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-ledger-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-ledger-text">xPense</span>
            <span className="bg-gradient-to-r from-ledger-accent to-ledger-sky bg-clip-text text-transparent">
              Track
            </span>
          </h1>
        </div>
        <p className="text-ledger-muted text-sm sm:text-base max-w-md mx-auto">
          Monitor your spending, visualize trends, and stay in control of your
          finances.
        </p>
      </header>

      <main className="pb-16">
        <NewExpense onAddExpenseData={addExpenseData} />
        <Expenses items={expenses} />
      </main>
    </div>
  );
}

export default App;
