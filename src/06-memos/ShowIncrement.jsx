import React from "react";


export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar :c')


  return (
    <button 
    className="btn btn-outline-success"
    onClick={() =>{
        increment(5);
    } }
    >ShowIncrement</button>
  )
})
