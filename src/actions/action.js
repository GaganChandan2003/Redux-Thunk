import { ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./types";
import axios from 'axios'

export const getTodosApi=()=>(dispatch)=>
{
     dispatch({type:GET_TODOS_REQUEST});
     axios.get('  http://localhost:3000/todo')
     .then((res)=>dispatch({type:GET_TODOS_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:GET_TODOS_FAILURE}))
}
export const addTodosApi=(payload)=>(dispatch)=>
{
    axios.post('http://localhost:3000/todo',payload)
    .then((res)=>dispatch({type:ADD_TODOS_SUCCESS,payload:res.data}))

}