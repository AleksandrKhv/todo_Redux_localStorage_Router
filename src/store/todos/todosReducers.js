import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './todosConst';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                todoId: Date.now(),
                todoTitle: action.todoTitle,
                completed: false
            }]
        }
        case DEL_TODO: {
            return state.filter((todo) => todo.todoId !== action.todoId)
        }
        case TOGGLE_TODO: {
            return state.map((todo) => todo.todoId === action.todoId ? {...todo, completed: !todo.completed } : todo)
        }
        default: {
            return state
        }
    }
}