import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addSymbol, addTask} from "../../Store/inputReducer";
import {appStoreType} from "../../Store/store";
import {categoriesType} from "../../Store/categoriesReducer";

export const TodoInput = () => {
    const categoriesArr: Array<categoriesType> = useSelector((state: appStoreType) => state.todoCategories.categories)
    const currentCategory = useSelector((state: appStoreType) => state.todoInput.currentCategory)
    const [chosenCategory, setChosenCategory] = useState<string>('no category')
    const onChosenCategoryChange = (e) => {
        setChosenCategory(e.target.value)
    }
    const dispatch = useDispatch()
    const symbols = useSelector((state: appStoreType) => state.todoInput.inputSymbols)
    const onTextInput = (e) => {
        dispatch(addSymbol(e.currentTarget.value))
    }
    const onAddTask = (e) => {
        if (e.key === 'Enter') {
            if (currentCategory){
                dispatch(addTask(currentCategory))
            }
            else dispatch(addTask(chosenCategory))
        }
    }
    return (
        <div className='todoInput__wrapper'>
            <input onChange={onTextInput} onKeyPress={onAddTask} value={symbols}
                   type="text" className="todoInput" placeholder='new task'/>
            <select value={currentCategory ? currentCategory : chosenCategory} onChange={onChosenCategoryChange} disabled={currentCategory}>
                {categoriesArr.map((item: categoriesType) => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}