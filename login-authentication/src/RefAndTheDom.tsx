import React, { useRef } from "react";

export default function RefAndTheDom() {
  const ref1 = useRef<HTMLInputElement>(null);

  const save = () => {
    if (ref1.current) {
      console.log(ref1.current.value); // Access the input value using the ref
    }
  };

  return (
    <div>
      <input type="text" name="test" ref={ref1} />
      <input type="button" onClick={save} value="Save" />
    </div>
  );
}
