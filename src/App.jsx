import React, { useState, version } from "react";
import TicTacToe_3x3 from "./Games/TicTacToe_3x3";
import TicTacToe_Custom from "./Games/TicTacToe_Custom";
import Navbar from "./Components/Navbar";

const App = () => {
  const [version, setVersion] = useState("custom");
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-[url('\Gaming_Back.jpg')]">
      <div className="h-full w-full py-5 px-10 flex flex-col justify-center items-center ">
        <div className="h-full w-full flex flex-col items-center gap-2">
          <Navbar />
          <div className="col-span-2 flex items-center justify-center gap-8">
            <div>
              <label className="flex gap-2 text-white text-xl">
                <input
                  name="versionGroup"
                  value={"3x3"}
                  type="radio"
                  checked={version === "3x3"}
                  onChange={(e) => setVersion(e.target.value)}
                />
                <p className={version === "3x3" && "text-red-500"}> 3X3</p>
              </label>
            </div>
            <div>
              <label className="flex gap-2 text-white text-xl">
                <input
                  name="versionGroup"
                  value={"custom"}
                  type="radio"
                  checked={version === "custom"}
                  onChange={(e) => setVersion(e.target.value)}
                />
                <p className={version === "custom" && "text-red-500"}>Custom</p>
              </label>
            </div>
          </div>
          {version === "3x3" ? <TicTacToe_3x3 /> : <TicTacToe_Custom />}
        </div>
      </div>
    </div>
  );
};

export default App;
