import React from "react";
import Lists from "./Lists";

export default function Home(props) {
  const items = props.lists.map((item) => (
    <Lists
      count={item.count}
      id={item.id}
      key={item.id}
      onIncrease={props.onIncrease}
      onDecrease={props.onDecrease}
      onRemove={props.onRemove}
    />
  ));
  return (
    <div className="grow bg-zinc-300">
      <div className="w-4/5  max-w-5xl mx-auto mt-5 rounded-lg overflow-hidden">
        <section className="w-full">
          <h1 className="bg-zinc-600 p-3 text-white text-center text-3xl font-sans">
            Hello and welcome to our company
          </h1>
          <div className="divide-y-2 divide-slate-300 bg-white">{items.length ? items : <p className="text-xl text-center py-7">No data Founds.</p>}</div>
          <div className="flex">
            <button
              type="button"
              className="bg-blue-400 w-full text-3xl py-3 hover:bg-blue-700 transition"
              onClick={props.onReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="bg-blue-400 w-full text-3xl py-3 hover:bg-blue-700 transition"
              onClick={props.onAdd}
            >
              Add
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
