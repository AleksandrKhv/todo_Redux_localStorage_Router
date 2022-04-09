import './App.css';
import React from 'react';

import {TodoList} from './components/TodoList';
import {NewTodo} from './components/NewTodo';
import {Filters} from './components/Filter';

function App() {
    return (
        <div className="App">
            <h1 className={'headerApp'}>Redux ToDoList</h1>
            <NewTodo/>
            <TodoList/>
            <Filters/>
        </div>
    );
}

export default App;
