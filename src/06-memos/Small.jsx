
import React from "react";

export const Small = React.memo(({counter}) => {
    

    console.log('Me volvi a generar :c')
  
    return (
    <small>{counter}</small>
  )
})
