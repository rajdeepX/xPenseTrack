import { useState } from "react";
import "./App.css";
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
      return [expense, ...prevExpenses];
    });
  };

  let x = new Date(2023, 7, 14);
  console.log(x.getFullYear());
  return (
    <div>
      <h1 className="app-title">
        xPense<span>Track</span>
      </h1>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
