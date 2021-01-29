import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addSymbol, addTask} from "../../Store/inputReducer";
import {appStoreType} from "../../Store/store";
import {categoriesType} from "../../Store/categoriesReducer";
import {Input, Tooltip} from 'antd';
import styles from './TodoInput.module.css'


export const TodoInput = () => {
    const categoriesArr: Array<categoriesType> = useSelector((state: appStoreType) => state.todoCategories.categories)
    const currentCategory = useSelector((state: appStoreType) => state.todoInput.currentCategory)
    const [chosenCategory, setChosenCategory] = useState<string>('no category')
    const onChosenCategoryChange = (e) => {
        setChosenCategory(e.currentTarget.value)
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
        <div className={styles.todoInput__wrapper}>
            <select value={currentCategory ? currentCategory : chosenCategory}
                    onChange={onChosenCategoryChange} disabled={currentCategory} className={styles.todoInput__select}>
                {categoriesArr.map((item: categoriesType) => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
            <Tooltip
                trigger={['focus']}
                title={'Press Enter to create task'}
                placement="topLeft"
                overlayClassName="numeric-input"
            >
            <Input onChange={onTextInput} onKeyPress={onAddTask} value={symbols} placeholder="new task" />
            </Tooltip>
        </div>
    )
}