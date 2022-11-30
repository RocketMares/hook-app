


import React, { useEffect, useReducer } from 'react';

import { todoReducer } from "../08-reducer/todoReducer";


const init = () => {

  return JSON.parse(localStorage.getItem('todos')|| []);

}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,[],init)
  
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
  const handlNewTodo = (todo) =>{
    const action = {
      type:'Add Todo',
      payload:todo
    }
    dispatch(action);
  }
  const onDeleteTodo = (id) =>{

 
    const action = {
      type:'Remove Todo',
      payload:id
    }
    dispatch(action);
  }
  const onToogleTodo = (id) =>{
    const action = {
      type:'Toogle Todo',
      payload:id
    }
    dispatch(action);
  }

  return {
    todos,
    todoCount:todos.length,
    handlNewTodo,
    onDeleteTodo,
    onToogleTodo,
    todoCountPending:todos.filter(todo => !todo.done).length,
   
  }
}



