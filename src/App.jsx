import React, { useState } from "react";

const App = () => {
  const initialState = Array(9).fill(null);
  const [turn, setTurn] = useState(true);
  const [state, setState] = useState(initialState);

  function checkWinner() {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let win of winner) {
      let [a, b, c] = win;
      if (state[a] !== null && state[a] == state[b] && state[c] === state[a]) {
        return true;
      }
    }
    return false;
  }
  const isWinner = checkWinner();

  function handleClick(index) {
    if (isWinner) {
      return;
    }
    const copyState = [...state];
    if (copyState[index] === null) {
      copyState[index] = turn ? "X" : "O";
      setState(copyState);
      setTurn(!turn);
    } else {
      return;
    }
  }
  return (
    <>
      <center className="grid grid-row place-content-center mt-10 ">
        <h1 className="text-2xl font-bold">
          {isWinner ? (
            <div>
              <p>The Winner is {turn ? "O" : "X"}</p>
              <button
                onClick={() => setState(initialState)}
                className="border-1 text-lg font-light  m-2 px-2"
              >
                Back
              </button>
            </div>
          ) : (
            `Player ${turn ? "X" : "O"} your Turn`
          )}
        </h1>

        <div className="flex">
          <div
            onClick={() => handleClick(0)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10  text-2xl font-bold "
          >
            {state[0]}
          </div>
          <div
            onClick={() => handleClick(1)}
            value={state[1]}
            className=" flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[1]}
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[2]}
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(3)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[3]}
          </div>
          <div
            onClick={() => handleClick(4)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[4]}
          </div>
          <div
            onClick={() => handleClick(5)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[5]}
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(6)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[6]}
          </div>
          <div
            onClick={() => handleClick(7)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[7]}
          </div>
          <div
            onClick={() => handleClick(8)}
            className="flex items-center justify-between h-20 w-20 border-1 cursor-pointer text-black border-black p-10 text-2xl font-bold "
          >
            {state[8]}
          </div>
        </div>
      </center>
    </>
  );
};

export default App;
