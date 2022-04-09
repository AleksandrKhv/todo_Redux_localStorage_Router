import {useDispatch, useSelector} from 'react-redux';
import {delTodoAC, toggleTodoAC} from '../store/todos/todosActions';
import React from 'react';
import {selectVisibleTodos} from '../store/todos/todosSelectors';
import {useParams} from 'react-router-dom';


export const TodoList = () => {
    const dispatch = useDispatch()
    const {filter} = useParams()
    const todos = useSelector(state => selectVisibleTodos(state, filter))


    return (
        <ul>
            {todos.map((t) => (
                <li key={t.todoId}>
                    <input type={'checkbox'} checked={t.completed} onChange={() => dispatch(toggleTodoAC(t.todoId))}/>
                    {t.todoTitle}
                    <button onClick={() => dispatch(delTodoAC(t.todoId))}>del</button>
                </li>
            ))}
        </ul>
    );
};