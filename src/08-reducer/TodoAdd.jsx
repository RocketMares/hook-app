import { useState } from "react";
import { useForm } from "../hook/useForm";


export const TodoAdd = ({onNewTodo}) => {

  const {onInputChange,description,onReseatFrom} =  useForm({
    description:''
  })


    const onSubmit = (event) =>{
        event.preventDefault();
        if(description.length <=1 ) return;

        const newTodo=  {
            id: new Date().getTime(),
            description,
            done:false,
        }
        onNewTodo(newTodo);
        onReseatFrom();
    }

  return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={onInputChange}
            />
            <button type="submit"
            className="btn btn-outline-success mt-3 my-3">
                Agregar
            </button>
        </form>
  )
}
