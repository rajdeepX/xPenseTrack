import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // const date = new Date();
  // const year = date.getFullYear();

  // console.log(year);

  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {filteredExpenses.length === 0 && (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#ddd",
            marginBottom: "50px",
          }}
        >
          Opps!! Nothing to track here
        </p>
      )}
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))}
    </Card>
  );
};

export default Expenses;
