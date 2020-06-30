import * as React from "react";
import { useSelector } from "react-redux";

import { Counter } from "./components/Counter";
import { CounterTitle } from "./components/CounterTitle";
import { FetchReposByUser } from "./components/FetchRepos";

export function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <p>contador: {counter}</p>
      <CounterTitle />
      <Counter />
      <hr />
      <FetchReposByUser />
    </>
  );
}
