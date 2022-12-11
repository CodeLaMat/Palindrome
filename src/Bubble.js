import React, { useState } from "react";
import "./Bubble.css";

function BubbleSort() {
  const [numbers, setNumbers] = useState([]);

  //Function for handling the input
  function addHandler(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector("input");
    const value = input.value.replace(/\D/g, "");
    setNumbers((numbers) => [value, ...numbers]);
    form.reset();
  }
  // reseting function to clean the array
  function resetHandler() {
    numbers.length = 0;
  }

  // Helper function to swap two elements in an array
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Main bubble sort function
  function sort() {
    const arr = [...numbers];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
    setNumbers(arr); // Update the state with the sorted array
  }

  return (
    <div className="bubble-container">
      <form onSubmit={addHandler}>
        <div>
          {" "}
          <h2>Bubble sorting</h2>
        </div>
        <div className="bubble-input">
          <div>
            <label>Please insert numbers:</label>
          </div>
          <div>
            <input type="numbers" />{" "}
          </div>
        </div>
        <button type="submit" onClick={resetHandler}>
          {" "}
          Reset{" "}
        </button>
        <button type="submit" onClick={sort}>
          {" "}
          Sort
        </button>{" "}
        <button type="submit">Add</button>
        <div className="result-container">
          <p>Unsorted numbers: {numbers.join(", ")}</p>

          <p>Sorted numbers: {numbers.join(", ")}</p>
        </div>
      </form>
    </div>
  );
}

export default BubbleSort;
