import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodosApi } from '../actions/action';

const TodosInput = () => {
    let ref=useRef();
    let dispatch=useDispatch();
    const handleAdd=()=>
    {
        let payload={
            task:ref.current.value,
            status:false
        }
        dispatch(addTodosApi(payload))
    }
  return (
    <div>
        <input ref={ref} type="text"/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodosInput