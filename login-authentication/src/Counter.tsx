import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { AppState } from "./reducer/rootReducer";
import { Margin } from "@mui/icons-material";

export default function Counter() {
  const countDispatch = useDispatch<AppDispatch>();
  const { count } = useSelector(
    (state: AppState) => state.counter || { count: 0 }
  );

  const handleIncrement = () => {
    countDispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    countDispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <div>{count}</div>
      <br></br>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
