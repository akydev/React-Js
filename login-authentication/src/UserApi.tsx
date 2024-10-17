import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import { AppState } from "./reducer/rootReducer";
export default function UserApi() {
  const userDispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: AppState) => state.user); // Correctly returning state.user
  console.log(data);

  useEffect(() => {
    userDispatch({ type: "UserRequest" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json()) // Ensure you return the parsed response
      .then((res) => {
        userDispatch({ type: "UserSuccess", payload: res });
      })
      .catch((err) => {
        userDispatch({ type: "UserError", payload: err }); // Use err instead of res
      });
  }, [useDispatch]);
  return <div>User</div>;
}
