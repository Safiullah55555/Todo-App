
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //for errors we do "npm install uuid" and then import this.

export default function TodoList(){
    // const [todos, setTodos] = useState([{task:"sample",id:uuidv4(),isDone:false}]);//todos directly connected to li and button
     const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");// newTodo connected to input field


    let AddTask = ()=>{//connected to button.
        // setTodos([...todos,{task: newTodo,id : uuidv4()}])

        setTodos((prevTodos) =>{
            return [...prevTodos,{task: newTodo,id : uuidv4(),isDone:false}]
        })
        setNewTodo("")
    }

    let updateTodo=(event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo=(id)=>{
        // setTodos(todos.filter((todo)=>todo.id !=id))
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id))
    }

    let markAllDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return{
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone: true
                }
              })
        ))
    }

    let markDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id==id){
                return{
                    ...todo,
                    isDone: true ,
                     }
               }else{
                return todo;
               }
                
              })
        ))
    }


  return(
        <div>
          <h1>Todo App</h1>
         <input type="text" 
         placeholder="add todo task here " 
         value={newTodo} 
         onChange={updateTodo}
         /> <br /><br />
         <button onClick={AddTask}>ADD</button>
         <br /> <br />
         <hr />
         <h3>tasks</h3>
         <ul>
          {
            todos.map((todo) =>{
                return <li key={todo.id}>
                         <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>              
                            {todo.task}
                            </span>
                         &nbsp;&nbsp;&nbsp;      
                         <button onClick={()=> deleteTodo(todo.id)}>DELETE</button>
                         <button onClick={()=> markDone(todo.id)}>Done</button>
                       </li>
            })
          }
         </ul>
         <br />
         <button onClick={markAllDone}>All Done</button>
        </div>
    )
 }