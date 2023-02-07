import React from "react";

export default function Lists({ id, count, onIncrease, onDecrease, onRemove }) {
  const increaseHandler = () => onIncrease(id);
  const decreaseHandler = () => onDecrease(id);
  const removeHandler = () => onRemove(id);
  let decreaseBtnClasses;
  let isLowerZero = count <= 0;
  if (isLowerZero) {
    decreaseBtnClasses =
      "bg-orange-300 rounded-lg py-2 px-4 transition hover:bg-orange-400 bg-orange-100 cursor-not-allowed hover:bg-orange-100";
  } else {
    decreaseBtnClasses =
      "bg-orange-300 rounded-lg py-2 px-4 transition hover:bg-orange-400";
  }
  return (
    <>
      <div className="py-6 px-3 flex justify-between items-center bg-slate-200">
        <span className="py-3 px-5 bg-slate-300 rounded-lg w-14 text-center">
          {count}
        </span>
        <div className="space-x-2">
          <button
            className="bg-green-300 rounded-lg py-2 px-4 transition hover:bg-green-400"
            onClick={increaseHandler}
          >
            +
          </button>
          <button
            className={decreaseBtnClasses}
            onClick={decreaseHandler}
            disabled={isLowerZero}
          >
            -
          </button>
          <button
            className="bg-red-300 rounded-lg py-2 px-4 transition hover:bg-red-400"
            onClick={removeHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
