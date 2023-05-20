import { useState } from "react";
import React from "react";

function Functionstate() {
    const [count, setCount] = useState(0);
    return (
        <>
        <body>
            <button className="btn btn-md btn-outline-dark" onClick={() => setCount(count + 1)}>
                Increment <b>&uarr;</b>
            </button>
            
            <h2 className="text-white countnumber">{count} </h2>
            
            <button className="btn btn-md btn-outline-dark" onClick={() => setCount(count - 1)}>
                Decrement <b>&darr;</b>
            </button>
        </body>
        </>
    );
}

export default Functionstate;