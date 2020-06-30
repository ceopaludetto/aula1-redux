import * as React from "react";
import { useSelector } from "react-redux";

export function CounterTitle() {
  const counter = useSelector((state) => state.counter);
  const repos = useSelector((state) => state.repos);

  return (
    <>
      <h1>(Redux)Titulo deve ter o contador: {counter}</h1>
      <h2>E o subtitulo o numero de repos: {repos.data.length}</h2>
    </>
  );
}
