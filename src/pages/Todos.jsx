import React from 'react'
import TodosInput from './TodosInput'
import TodosList from './TodosList'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getTodosApi } from '../actions/action'

const Todos = () => {
    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(getTodosApi());
    },[dispatch]);
  return (
    <div>
        Todos
       <TodosInput/>
       <TodosList/>
    </div>
  )
}

export default Todos
