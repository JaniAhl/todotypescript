import React, { useState } from 'react'

interface Todo {
  desc: string,
  date: string,
  priority: string
}

export default function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: '', priority:''})
    const [todos, setTodos] = useState<Todo[]>([])
    
    const addTodo =  (event: any) => {
        event.preventDefault()
        setTodos([...todos, todo])
      }
    
      const inputChanged =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.name]: event.target.value })
      }
  

        const handleDelete = (index: any) => {
          const deletedTodo = [...todos].filter((todo, i) => i !== index)
      
          setTodos(deletedTodo)
        }
        


    return(
        <div className="App" >     
         <div className="div1"> 
            <form onSubmit={addTodo}>
              <input placeholder="Description"type="text" name="desc" value={todo.desc} onChange={inputChanged}  />
              <input placeholder="Date" type="date" name="date" value={todo.date} onChange={inputChanged}  />
              <input placeholder="Priority"type="text" name="priority" value={todo.priority} onChange={inputChanged} />
              <input type="submit" value="Add" />
            </form>
          </div>
          <table>
            <tbody>
              <tr><th>Date</th><th>Description</th><th>Priority</th></tr>
              {
              todos.map((todo, index) => 
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                  <td>{todo.priority}</td>
                  <td><button onClick={() => handleDelete(index)}> Delete </button></td>
                </tr>
              )
              } 
            </tbody>
          </table>
        </div>
    )
}
