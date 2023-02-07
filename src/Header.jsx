import React from "react";

export default function Header({counter}) {
  return (
    <header className="bg-black">
      <nav className=" text-white py-3 flex justify-between w-4/5 mx-auto items-center">
        <ul className="flex space-x-3">
          <li>Home</li>
          <li>About</li>
          <li>Recent</li>
        </ul>
        <span className="rounded-full bg-blue-400 py-1 px-3 text-md">
          Counter: {counter}
        </span>
      </nav>
    </header>
  );
}
