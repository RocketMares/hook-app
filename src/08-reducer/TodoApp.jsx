import { useTodo } from "../hook/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

   const {onDeleteTodo,onToogleTodo,handlNewTodo,todos,todoCount,todoCountPending} = useTodo()
 
  return (
    <>
    <h1>TodoApp ({todoCount}) <span>Penditnes: {todoCountPending}</span></h1>
    
    <hr />
      <div className="row" >
        <div className="col-7">
          <TodoList todos = {todos} 
          onDeleteTodo ={onDeleteTodo}
          onToogleTodo ={onToogleTodo} />
        </div>
        <div className="col-5" >
          <h4>Agregar Todo</h4>
          <hr />
          < TodoAdd onNewTodo = { handlNewTodo} />
          </div>
      </div>
   
    </>
  )
}
