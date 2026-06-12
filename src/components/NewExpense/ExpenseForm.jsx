import { useState } from "react";

const labelClass = "text-sm font-semibold text-ledger-muted";

const inputClass =
  "w-full h-11 px-4 rounded-xl border border-ledger-border bg-ledger-bg text-ledger-text text-sm placeholder:text-ledger-muted/50 focus:outline-none focus:ring-2 focus:ring-ledger-accent/40 focus:border-ledger-accent transition-colors [color-scheme:dark]";

const primaryBtnClass =
  "font-semibold cursor-pointer h-11 px-6 rounded-xl border border-ledger-accent bg-ledger-accent text-ledger-bg hover:bg-ledger-accent-light hover:border-ledger-accent-light transition-colors";

const secondaryBtnClass =
  "font-semibold cursor-pointer h-11 px-6 rounded-xl border border-ledger-border bg-ledger-elevated/50 text-ledger-muted hover:text-ledger-text hover:border-ledger-muted transition-colors";

const Field = ({ label, htmlFor, children }) => (
  <div className="flex flex-col gap-2">
    <label className={labelClass} htmlFor={htmlFor}>
      {label}
    </label>
    {children}
  </div>
);

const ExpenseForm = ({ onInputExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    setShow(false);
    onInputExpenses(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      {show ? (
        <div className="space-y-5">
          <Field label="Title" htmlFor="title">
            <input
              className={inputClass}
              id="title"
              type="text"
              placeholder="e.g. Groceries, Rent, Utilities"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Amount" htmlFor="amount">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-ledger-muted">
                  Rs.
                </span>
                <input
                  className={`${inputClass} pl-11 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                  id="amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  required
                />
              </div>
            </Field>

            <Field label="Date" htmlFor="date">
              <input
                className={inputClass}
                id="date"
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Field>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
            <button
              type="button"
              className={`${secondaryBtnClass} w-full sm:w-auto`}
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${primaryBtnClass} w-full sm:w-auto`}
            >
              Add Expense
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className={`${primaryBtnClass} w-full`}
          onClick={() => setShow(true)}
        >
          + Add New Expense
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
