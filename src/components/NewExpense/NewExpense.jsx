import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  const inputExpensesHandler = (expenseItems) => {
    onAddExpenseData(expenseItems);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onInputExpenses={inputExpensesHandler} />
    </div>
  );
};

export default NewExpense;
