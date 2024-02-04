import React from "react";

const Card = (props) => {
    return(
        <>
            <div class=" w-full h-80" style={{backgroundColor: props.bgcolor}}>
               <h1>{props.bgcolor}</h1>
            </div>  

        </>
    )
}

export default Card;