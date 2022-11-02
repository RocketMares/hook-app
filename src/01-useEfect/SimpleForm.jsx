import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Mares Sanchez',
        email:'MASA955J1@dssat.sat.gob.mx',
    })
    const {username,email} = formState;

    const onInputChange = ({target}) => {
      const {value,name} = target;
      setFormState({
        ...formState,
        [name] :value
      })
    }

    

  return (
    <>
    
    <h1>Formulario simple:</h1>

    <hr />

    <input 
    type="text" 
    className="form-control mt-2" 
    name="username" 
    placeholder="User Name" 
    value={username}
    onChange={onInputChange}
    />
    <input 
    type="email" 
    className="form-control mt-2" 
    name="email" 
    placeholder="andres.mares@gmail.com" 
    value={email}
    onChange={onInputChange}
    />
    {
        (username==='Mares Sanchez') &&  <Message />
    }
   
    
    </>
  )
}
