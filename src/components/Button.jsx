import React, { useState } from "react";
import { cn } from "../lib/util";

export default function Button({ clickHandler, btnText , color, type}) {
//   const [color, setColor] = useState("warning");

  return (
    <button className={cn("btn md:text-xl", `btn-${color}`)}
    // {cn(`btn btn-${color}`)}
     
    type={type}
    onClick={clickHandler}>
      {btnText}
    </button>
  );
}
