import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpenseData }) => {
  const inputExpensesHandler = (expenseItems) => {
    onAddExpenseData(expenseItems);
  };

  return (
    <div className="bg-[#780000] p-4 my-8 mx-auto w-200 max-w-[95%] rounded-xl text-center shadow-[0_1px_8px_rgba(0,0,0,0.25)] [&_button]:font-inherit [&_button]:cursor-pointer [&_button]:py-4 [&_button]:px-8 [&_button]:border [&_button]:border-[#fdf0d5] [&_button]:bg-[#fdf0d5] [&_button]:text-[#003049] [&_button]:rounded-xl [&_button]:mr-4 [&_button:hover]:bg-[#f0c673] [&_button:hover]:border-[#f0c673] [&_button:active]:bg-[#f0c673] [&_button:active]:border-[#f0c673] [&_button.alternative]:text-[#220131] [&_button.alternative]:border-transparent [&_button.alternative]:bg-transparent [&_button.alternative:hover]:bg-[#ddb3f8] [&_button.alternative:active]:bg-[#ddb3f8]">
      <ExpenseForm onInputExpenses={inputExpensesHandler} />
    </div>
  );
};

export default NewExpense;
