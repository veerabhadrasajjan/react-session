export const GET_ALL_TODO_SUCCESS = 'app/todo/GET_ALL_TODO_SUCCESS';

export const GET_ALL_TODO_FAILURE = 'app/todo/GET_ALL_TODO_FAILURE';
export const DELETE_TODO_SUCCESS = 'app/todo/DELETE_TODO_SUCCESS';

export const saveToSuccess = response => ({
    type: GET_ALL_TODO_SUCCESS,
    payload: response
})

export const SaveTodo = (todo) => {
    return dispatch => {
        dispatch(saveToSuccess(todo))
    }
}


export const deleteToDOSuccess = id => ({
    type: DELETE_TODO_SUCCESS,
    id: id
})

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch(deleteToDOSuccess(id))
    }
}