import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onInputExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    onInputExpenses(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      {show ? (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                onChange={handleTitleChange}
                value={title}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="amount"
                min="0.01"
                step="0.01"
                onChange={handleAmountChange}
                value={amount}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                onChange={handleDateChange}
                value={date}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions" style={{ textAlign: "right" }}>
            <button onClick={() => setShow(!show)}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      ) : (
        <>
          <div className="new-expense__actions">
            <button
              style={{ textAlign: "center" }}
              onClick={() => setShow(!show)}
            >
              Add New Expense
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ExpenseForm;
