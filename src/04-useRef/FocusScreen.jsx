import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef() 


    const onFocis = () =>{
        
    inputRef.current.select();
    }


  return (
    <>
    
    <h1>Focus Screen</h1>

    <hr/>

    <input 
    type="text"
    ref={inputRef}
    className="form-control"
    placeholder="Ingresa tu nombre"
    name="ingre_nombre" 
    id="" />

    <button 
    onClick={onFocis}
    className="btn btn-primary mt-2">
       Set Focus
    </button>
    </>
  )
}
