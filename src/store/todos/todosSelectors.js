export const selectAllTodos = (state) => state.todoReducer

export const selectActiveTodos = (state) => state.todoReducer.filter(todo => todo.completed === false)

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case ('all'): {
            return state.todoReducer
        }
        case ('active'): {
            return state.todoReducer.filter((t) => !t.completed)
        }
        case ('completed'): {
            return state.todoReducer.filter((t) => t.completed)
        }
        default: {
            return state.todoReducer
        }
    }
}