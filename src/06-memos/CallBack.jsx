
import { useState,useCallback,useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBack = () => {

    const [counter, setCounter] = useState(10);

    const increment =  useCallback(
      ( value  ) => {
   
        setCounter((c)=> c+value);
      },
      [],
    )
    
    // useEffect(() => {
    //       }
    

  return (
    <>
        <h1>useCallBack Hook: {counter} </h1>

        <hr/>
        <ShowIncrement increment={increment}/>
    </>
  )
}
