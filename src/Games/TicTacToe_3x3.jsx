import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaDotCircle } from "react-icons/fa";

const TicTacToe_3x3 = () => {
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
        <h1 className=" flex justify-center h-15 w-70 text-2xl font-bold  my-2">
          {isWinner ? (
            <div className="flex items-center ">
              <p className={turn ? "text-blue-500" : "text-red-500"}>
                The Winner is {turn ? "O" : "X"}
              </p>
              <button
                onClick={() => setState(initialState)}
                className="m-2 px-2 border-2 border-red-500 text-xl text-white rounded-lg bg-red-400 hover:bg-transparent hover:text-red-400 hover:border-red-400 "
              >
                Back
              </button>
            </div>
          ) : (
            <p className=" text-2xl -translate-x-5 text-white ">
              Player{" "}
              {turn ? (
                <span className="text-red-500">X</span>
              ) : (
                <span className="text-blue-500">O</span>
              )}{" "}
              your Turn
            </p>
          )}
        </h1>

        <div className="flex m-2 ">
          <div
            onClick={() => handleClick(0)}
            className="flex items-center justify-between h-14 w-19  cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[0] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[0] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(1)}
            value={state[1]}
            className="flex items-center justify-between h-14 w-19  cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[1] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[1] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[2] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[2] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <div className="flex m-2">
          <div
            onClick={() => handleClick(3)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[3] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[3] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(4)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[4] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[4] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(5)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[5] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[5] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        <div className="flex m-2">
          <div
            onClick={() => handleClick(6)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[6] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[6] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(7)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[7] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[7] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
          <div
            onClick={() => handleClick(8)}
            className="flex items-center justify-between h-14 w-19 cursor-pointer text-black text-2xl font-bold "
          >
            <button className=" h-full  w-full flex items-center justify-center text-xl m-2 rounded-lg bg-gray-400">
              {state[8] === "X" ? (
                <ImCross className="text-red-500" />
              ) : state[8] === "O" ? (
                <FaDotCircle className="text-blue-500" />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </center>
    </>
  );
};

export default TicTacToe_3x3;
