import React from 'react'
import {TodoField} from './Components/TodoField/TodoField';
import {Categories} from "./Components/Categories/Categories";
import './App.css'

function App() {
    return (
        <>
            <h1 className="todoTitle">todo</h1>
            <div className='todoInner'>
                <Categories/>
                <TodoField/>
            </div>
        </>
    );
}

export default App
