import React, { useRef } from "react";
import { useStackState } from "rooks";
import "./Stack.css";

export default function Stack() {
  const pushedToRef = useRef(3);
  const [list, { push, pop, peek, length }, listInReverse] = useStackState([
    1, 2, 3,
  ]);

  // Main stack function
  function addToStack() {
    pushedToRef.current = pushedToRef.current + 1;
    push(pushedToRef.current);
  }

  return (
    <div className="stack-container">
      <h2>Stack</h2>

      <div className="result-container">
        {listInReverse.map((numbers) => {
          return <div className="stack-result">{numbers}</div>;
        })}
      </div>
      <div>
        <button onClick={addToStack}>Push</button>
        <button onClick={pop} warning>
          Pop
        </button>
      </div>
      <div className="stack-info">
        <p>Top Element : {peek()}</p>

        <p>Stack Size : {length}</p>
      </div>
    </div>
  );
}
