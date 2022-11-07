

const initialState = [{
    id:1,
    todo:'Recolectare la piedra del alma',
    done: false,
}];


const miFuncion = (state = initialState,action={}) =>{

    if(action.type == '[TODO] add todo'){
        return [...state,action.payLoad]
    }


    return state;


}


let todos = miFuncion();


const newTodo = 
    {
        id:2,
        todo:'Recolectar la gema del poder',
        done:false,
    
    }




    const addTodoAction = {
        type:'[TODO] add todo',
        payLoad: newTodo,
    
    
    }

todos = miFuncion(todos,addTodoAction)

console.log(todos)
