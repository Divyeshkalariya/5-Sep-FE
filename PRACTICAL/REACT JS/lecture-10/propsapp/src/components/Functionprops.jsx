import React from "react";

function Functionprops(props){

    return(
        <>
            <div className="text-center mt-5">
                <h1>Hellow, I Am <span style={{color:"green"}}>{props.name}</span></h1>
                <p>Using function components</p>
                <hr/>
            </div>
        </>
    )

}

export default Functionprops;