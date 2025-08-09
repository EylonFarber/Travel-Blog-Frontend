import React, { useState } from "react";
import { cn } from "../lib/util";

export default function Button({ clickHandler, btnText , color}) {
//   const [color, setColor] = useState("warning");

  return (
    <button className={cn("btn", `btn-${color}`)}
    // {cn(`btn btn-${color}`)} 
    onClick={clickHandler}>
      {btnText}
    </button>
  );
}
