import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className=" lg:top-3 top-6 w-screen lg:w-full z-50 ">
      <div className=" h-20 w-full m-2 flex justify-end  ">
        <div className="h-full  w-[50%] lg:w-[55%] lg:translate-x-10 py-3 px-10 border-1 border-red-500 rounded-tl-4xl   backdrop-blur-3xl shadow-2xl">
          <div className="grid grid-cols-6  ">
            <div className="col-span-2  font-bold heading text-red-400  ">
              <h1 className="lg:text-4xl text-2xl ">TicTacToe</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
