import * as React from "react";
import { useSelector } from "react-redux";

export function Batata({ className }) {
  const counter = useSelector((state) => state.counter);
  const repos = useSelector((state) => state.repos);

  return <p className={className}>Numero de batatas: {counter * repos.data.length}</p>;
}
