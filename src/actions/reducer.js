import { ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./types"

const initialState={
    todos:[],
    isLoading:false,
    isError:true
}

export const reducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case GET_TODOS_REQUEST:
            {
                return{
                    ...state,isLoading:true,isError:false
                }
            }
            case GET_TODOS_SUCCESS:
                {
                    return{
                        ...state,todos:payload,isLoading:false,isError:false
                    }
                }
                case GET_TODOS_FAILURE:
                    {
                        return{
                            ...state,isLoading:false,isError:true
                        }
                    }
                        case ADD_TODOS_SUCCESS:
                            {
                                return{
                                    ...state,todos:[...state.todos,payload],isLoading:false,isError:false
                                }
                            }
        default:
            {
                return state
            }
    }
}