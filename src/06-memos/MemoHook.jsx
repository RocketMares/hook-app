import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hook"

const heavyStuff = (iteracionNumber = 100) =>{
    for (let i = 0; i < iteracionNumber; i++) {

      console.log('Ahi vamos...');
      
    }
    return `${iteracionNumber} iteracines realizadas`;
}

export const MemoHook = () => {

    const {increment,decrement,counter} = useCounter(1);
    const [show, setShow] = useState(true);
    const MessageMemorize = useMemo( () => heavyStuff(counter),[counter] );

  return (
    <>
    <h1>Counter:  <small>{counter}</small></h1>
    <hr/>

    <h4>{MessageMemorize}</h4>


    <button className="btn btn-primary"
    onClick={increment}
    >
        +1
    </button>
    
    <button className="btn btn-outline-primary"
    onClick={() => setShow(!show)}
    >
    Hide/Show {JSON.stringify(show)} </button>
    </>
  )
}
