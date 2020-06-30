import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../services/ducks/counter";
import { Batata } from "./Batata";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button> {counter}{" "}
      <button onClick={() => dispatch(increment())}>+</button>
      <Batata className="teste" />
      <Batata className="teste-5" />
    </>
  );
}
