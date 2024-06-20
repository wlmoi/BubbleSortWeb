// BubbleSortVisualizer.js

import React, { useState } from 'react';

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState(generateRandomArray());

  // Generate an array of random numbers
  function generateRandomArray() {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return newArray;
  }

  // Bubble Sort algorithm
  function bubbleSort() {
    const arr = [...array];
    const n = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          // Add a delay for visualization (adjust as needed)
          setTimeout(() => setArray([...arr]), 100);
        }
      }
    } while (swapped);

    // Sorting complete
  }

  return (
    <div className="bubble-sort-visualizer">
      <button onClick={bubbleSort}>Start Sorting</button>
      <div className="bars">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
