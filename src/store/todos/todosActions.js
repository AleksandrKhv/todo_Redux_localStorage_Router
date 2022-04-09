import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './todosConst';

export const addTodoAC = (todoTitle) => {
    return {
        type: ADD_TODO, todoTitle
    }
}
export const delTodoAC = (todoId) => {
    return {
        type: DEL_TODO, todoId
    }
}
export const toggleTodoAC = (todoId) => {
    return {
        type: TOGGLE_TODO, todoId
    }
}