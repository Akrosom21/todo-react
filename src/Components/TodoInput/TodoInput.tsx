import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addSymbol, addTask} from "../../Store/inputReducer";
import {appStoreType} from "../../Store/store";

export const TodoInput = () => {
    const dispatch = useDispatch()
    const symbols = useSelector((state: appStoreType) => state.todoInput.inputSymbols)
    const onTextInput = (e) => {
        dispatch(addSymbol(e.currentTarget.value))
    }
    const onAddTask = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTask())
        }
    }
    return (
        <div className='todoInput__wrapper'>
            <input onChange={onTextInput} onKeyPress={onAddTask} value={symbols} type="text" className="todoInput"/>
        </div>
    )
}