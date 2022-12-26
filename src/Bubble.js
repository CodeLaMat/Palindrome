import React, { useState } from "react";
import "./Bubble.css";

function BubbleSort() {
  const [numbers, setNumbers] = useState([]);
  const [sortedNumbers, setSortedNumbers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const number = parseInt(event.target.elements.number.value, 10);
    setNumbers([...numbers, number]);
    form.reset();
  }

  console.log(numbers);

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
    const arr = numbers.filter(function (value) {
      return !Number.isNaN(value);
    });
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
    setSortedNumbers(arr); // Update the state with the sorted array
  }

  return (
    <div className="bubble-container">
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <h2>Bubble sorting</h2>
        </div>
        <div className="bubble-input">
          <div>
            <label>Please insert numbers:</label>
          </div>
          <div>
            <input type="text" name="number" />
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

          <p>Sorted numbers: {sortedNumbers.join(", ")}</p>
        </div>
      </form>
    </div>
  );
}

export default BubbleSort;
