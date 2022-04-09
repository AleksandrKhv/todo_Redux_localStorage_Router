import React from 'react';
import {useDispatch} from 'react-redux';
import {addTodoAC} from '../store/todos/todosActions';
import '../App.css';

export const NewTodo = () => {
    const dispatch = useDispatch()

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(addTodoAC(event.target.title.value))
        event.target.reset()
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input type={'text'} name={'title'} placeholder={'new todo'} className={'inputText'}/>
            <input type={'submit'} value={'Add Todo'} className={'inputSubmit'}/>
        </form>
    )
}