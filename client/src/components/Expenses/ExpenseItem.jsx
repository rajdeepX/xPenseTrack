import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="flex justify-between items-center p-4 bg-ledger-elevated/60 hover:bg-ledger-elevated hover:border-ledger-accent/30 transition-all duration-200">
      <ExpenseDate date={props.date} />
      <div className="flex flex-col-reverse gap-3 items-end justify-start flex-1 min-[580px]:flex-row min-[580px]:items-center min-[580px]:justify-between min-[580px]:gap-4">
        <h2 className="text-ledger-text text-base font-medium flex-1 mx-4 min-[580px]:text-lg">
          {props.title}
        </h2>
        <div className="text-base font-bold text-ledger-accent-light bg-ledger-accent/10 border border-ledger-accent/30 px-4 py-2 rounded-xl min-[580px]:text-lg whitespace-nowrap">
          Rs.{props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
