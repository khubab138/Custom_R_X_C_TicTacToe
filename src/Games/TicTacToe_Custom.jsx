import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaDotCircle } from "react-icons/fa";

const TicTacToe_Custom = () => {
  const [val, setval] = useState("");
  const [matrixSize, setMatrixSize] = useState(0);

  const [state, setState] = useState([]);
  const [turn, setTurn] = useState(true);

  console.log(val);
  console.log(matrixSize);
  console.log(state);
  //_________________INPUT____________________________________
  function changeVal() {
    const size = parseInt(val);
    if (!isNaN(size) && size > 0) {
      setMatrixSize(size);
      setState(Array(size * size).fill(null));
    }
  }
  //___________________TABLE_LOGIC_________________________________________
  let count = 0;
  let matrix = [];
  for (let i = 0; i < matrixSize; i++) {
    let row = [];
    for (let j = 0; j < matrixSize; j++) {
      row.push(count++);
    }
    matrix.push(row);
  }
  //____________________Converting_1D_Array_To_2D Array_______________________________

  const arr2D = [];
  let c = 0;

  for (let k = 0; k < val; k++) {
    let R = [];
    for (let l = 0; l < val; l++) {
      let t = c++;
      R.push(state[t]);
    }
    arr2D.push(R);
  }

  //________________________WINNER_LOGIC
  function checkWinner(matrix) {
    const size = matrix.length;

    // Check rows
    for (let i = 0; i < size; i++) {
      const row = matrix[i];
      if (Array.isArray(row) && row.every((cell) => cell === row[0])) {
        return row[0];
      }
    }

    // Check columns
    for (let j = 0; j < size; j++) {
      const first = Array.isArray(matrix[0]) ? matrix[0][j] : undefined;
      if (first && matrix.every((row) => row[j] === first)) {
        return first;
      }
    }

    // No winner
    return null;
  }

  const result = checkWinner(arr2D);

  //__________________________handle_Cells________________________________
  function handleButton(index) {
    if (result !== null) {
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
    <center className="grid grid-row place-content-center mt-10">
      <div className="flex justify-center h-15 w-70 text-2xl font-bold  my-2">
        <h2>
          {result === "O" || result === "X" ? (
            <div className="flex items-center justify-center">
              <p className={result === "O" ? "text-blue-500" : "text-red-500"}>
                The Winner is {result === "O" ? "O" : "X"}
              </p>
              <button
                onClick={() => {
                  setMatrixSize(""), setState([]);
                }}
                className="m-2 px-2 border-2 border-red-500 text-xl text-white rounded-lg bg-red-400 hover:bg-transparent hover:text-red-400 hover:border-red-400 "
              >
                Back
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 place-content-center items-center -translate-x-3 ">
              <input
                className="col-span-1 border-1 border-red-500 px-1 rounded-lg text-white m-5 bg-transparent"
                onChange={(e) => {
                  setval(e.target.value);
                }}
                type="number"
              />
              <button
                className="col-span-2 h-9 px-2 border-2 border-red-500 text-xl text-white rounded-lg bg-red-400 hover:bg-transparent hover:text-red-400 hover:border-red-400 "
                onClick={changeVal}
              >
                add
              </button>
            </div>
          )}
        </h2>
        {/* <h2>
          {result === "X" ? (
            <h1 className="text-red-500"> X is the Winner</h1>
          ) : result === "O" ? (
            <h1 className="text-blue-500"> O is the Winner</h1>
          ) : (
            <div className="grid grid-cols-3 place-content-center items-center -translate-x-3 ">
              <input
                className="col-span-1 border-1 border-red-500 px-1 rounded-lg text-white m-5 bg-transparent"
                onChange={(e) => {
                  setval(e.target.value);
                }}
                type="number"
              />
              <button
                className="col-span-2 h-9 px-2 border-2 border-red-500 text-xl text-white rounded-lg bg-red-400 hover:bg-transparent hover:text-red-400 hover:border-red-400 "
                onClick={changeVal}
              >
                add
              </button>
            </div>
          )}
        </h2> */}
      </div>

      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr className="p-2  h-20 w-20 " key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className="p-2  h-20 w-20 " key={cellIndex}>
                  <button
                    onClick={() => handleButton(cell)}
                    className="h-full w-full flex items-center rounded-xl justify-center bg-gray-400"
                  >
                    {state[cell] === "X" ? (
                      <ImCross className=" text-red-600" />
                    ) : (
                      state[cell] === "O" && (
                        <FaDotCircle className="font-extrabold text-xl text-blue-600" />
                      )
                    )}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default TicTacToe_Custom;
