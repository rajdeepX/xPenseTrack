import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpenseData }) => {
  const inputExpensesHandler = (expenseItems) => {
    onAddExpenseData(expenseItems);
  };

  return (
    <section className="my-6 mx-auto w-200 max-w-[95%]">
      <Card className="p-6 border-ledger-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-ledger-accent animate-pulse" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-ledger-muted">
            New Transaction
          </h2>
        </div>
        <ExpenseForm onInputExpenses={inputExpensesHandler} />
      </Card>
    </section>
  );
};

export default NewExpense;
