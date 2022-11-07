

export const TodoList = ({todos=[],onDeleteTodo,onToogleTodo}) => {
  
  

  
  return (
    <ul className="list-group">
    { 

        todos.map( todo =>(
          <li key={todo.id} className="list-group-item d-flex justify-content-between">
          <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
          onClick={()=>onToogleTodo(todo.id)}
          > {todo.description}</span>
          <button className="btn btn-danger" onClick={id => onDeleteTodo(todo.id)} >Borrar</button>
        </li>
        )
    
        )
  
    }
  </ul>
  )
}
