import React from 'react'
import { useSelector } from 'react-redux'

const TodosList = () => {
    const todos=useSelector((state)=>state.todos);
    console.log(todos);
  return (
    <div>
        {
            todos.map((el)=>
            (
                <div key={el.id}>{el.task}</div>
            ))
        }
    </div>
  )
}

export default TodosList