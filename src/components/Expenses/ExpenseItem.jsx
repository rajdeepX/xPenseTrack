import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="flex justify-between items-center p-2 my-4 bg-[#4b4b4b]">
      <ExpenseDate date={props.date} />
      <div className="flex flex-col-reverse gap-4 items-end justify-start flex-1 min-[580px]:flex-row min-[580px]:items-center min-[580px]:justify-start">
        <h2 className="text-white text-base flex-1 mx-4 min-[580px]:text-xl">
          {props.title}
        </h2>
        <div className="text-base font-bold text-[#3a3a3a] bg-[#fdf0d5] border border-white p-2 rounded-xl min-[580px]:text-xl min-[580px]:px-6">
          Rs.{props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
