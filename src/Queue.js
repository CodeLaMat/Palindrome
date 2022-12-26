import React, { useRef } from "react";
import { useQueueState } from "rooks";
import "./Queue.css";

export default function Stack() {
  const pushedToRef = useRef(3);
  const [list, { enqueue, dequeue, peek, length }] = useQueueState([1, 2, 3]);

  // Main queue  function
  function addToStack() {
    pushedToRef.current = pushedToRef.current + 1;
    enqueue(pushedToRef.current);
  }

  return (
    <div className="stack-container">
      <h2>Queue</h2>

      <div className="result-container">
        {list.map((numbers) => {
          return <div className="stack-result">{numbers}</div>;
        })}
      </div>
      <div>
        <button onClick={addToStack}>Enqueue</button>
        <button onClick={dequeue} warning>
          Dequeue
        </button>
      </div>
      <div className="stack-info">
        <p>Top dequeued elements : {peek()}</p>

        <p>Stack Size : {length}</p>
      </div>
    </div>
  );
}
