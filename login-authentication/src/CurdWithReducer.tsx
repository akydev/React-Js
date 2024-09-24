import React, { useReducer, useState } from "react";
import { CountActionKind, IEnum } from "./interface/IEnum";
// import { IEnum } from "./interface/IEnum";

// enum CountActionKind {
//   ADD = "Add",
//   UPDATE = "UPDATE",
//   DELETE = "DELETE",
// }
// export interface IEnum {
//   type: CountActionKind;
//   payload: string;
// }

export default function CurdWithReducer() {
  const [input, setInput] = useState<string>("");

  const myReducer = (state: string[], action: IEnum) => {
    switch (action.type) {
      case CountActionKind.ADD:
        let textData = [...state];
        textData.push(action.payload);
        return textData;
      default:
        return state;
    }

    return state;
  };

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const [data, setData] = useReducer(myReducer, []);

  const saveInfo = () => {
    setData({ type: CountActionKind.ADD, payload: input });
  };

  console.log(data);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="button" onClick={saveInfo}>
        Save
      </input>
    </div>
  );
}
