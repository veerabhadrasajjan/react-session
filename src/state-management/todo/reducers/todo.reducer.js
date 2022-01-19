import { GET_ALL_TODO_SUCCESS, GET_ALL_TODO_FAILURE, DELETE_TODO_SUCCESS } from '../action/todo.action';
import { combineReducers } from 'redux'

const createReducer = (initialState) => reducerMap => (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    return reducer ? reducer(state, action) : state
}


const initialState = [
    {
        id: 1,
        title: 'Setup Development env',
        completed: true
    }
];

const todoReducer = createReducer(initialState)({
    [GET_ALL_TODO_SUCCESS]: (state, action) => {
        state = [...state, action.payload]
        return state
    },
    [DELETE_TODO_SUCCESS]: (state, action) => {
        state = state.filter((item) => {
            return item.id != action.id
        })
        return state
    },

    [GET_ALL_TODO_FAILURE]: (state, action) => action.payload,
})

const selectedToDoReducer = createReducer({})({
    [GET_ALL_TODO_SUCCESS]: (state, action) => action.payload,
    [GET_ALL_TODO_FAILURE]: (state, action) => action.payload,
})

export default combineReducers({
    allTodos: todoReducer,
    selectedToDo: selectedToDoReducer
})