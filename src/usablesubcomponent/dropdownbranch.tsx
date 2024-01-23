import React, { useState } from "react";
import { Searchesgo } from "./searchgo";
import { Tabdc } from "./tabdc";

export const DropdownBranch = () => {
  return (
    <div className="absolute border-2 w-[20rem] h-[18rem] bg-white text-justify px-[2rem] rounded-xl font-serift">
      <ul>
        <li className=" h-[3rem]  flex items-center">
          <span className="mr-[5rem]">switch branches/tags </span>
          <i className="fa-sharp fa-solid fa-xmark "></i>
        </li>
        <li className="border-b h-[3rem] ">{<Searchesgo />}</li>
        <li className="border-b h-[3rem] ">{<Tabdc />}</li>
        <li className="border-b h-[3rem] "></li>
        <li className="border-b h-[3rem] "></li>
        <li className="border-b h-[3rem] "></li>
      </ul>
    </div>
  );
};