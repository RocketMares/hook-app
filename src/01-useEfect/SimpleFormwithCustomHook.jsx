import { useEffect } from "react"
import { useForm } from "../hook"


export const FormCustomHook = () => {

    const {formState,onInputChange,onReseatFrom,username,email,password} = useForm({
      username: '',
      email: '',
      password: '',
    });
   
    // const {username,email,password} = formState;

  return (
    <>
    
    <h1>Formulario con Custom Hook</h1>

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
    <input 
    type="password" 
    className="form-control mt-2"   
    name="password" 
    placeholder="Contraseña"  
    value={password}
    onChange={onInputChange}
    />

    <button onClick={onReseatFrom} className="btn btn-danger mt-3" > Borrar </button>
    
    </>
  )
}
