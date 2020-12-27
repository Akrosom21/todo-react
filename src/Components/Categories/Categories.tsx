import React from "react";
import styles from './Categories.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {appStoreType} from "../../Store/store";
import {addCategory, addSymbolCategories, categoriesType, deleteCategory} from "../../Store/categoriesReducer";
import {showAllCategories, switchCategory} from "../../Store/inputReducer";

export const Categories = () => {
    const categories: Array<categoriesType> = useSelector((state: appStoreType) => state.todoCategories.categories)
    const symbol: string = useSelector((state: appStoreType) => state.todoCategories.categoriesSymbols)
    const dispatch = useDispatch()
    const onCategoriesSymbolChange = (e) => {
        dispatch(addSymbolCategories(e.currentTarget.value))
    }
    const onAddCategory = (e) => {
        if (e.key === 'Enter') {
            dispatch(addCategory())
        }
    }
    const onCategoryDelete = (id) => {
        dispatch(deleteCategory(id))
    }
    const onCategorySwitch = (categoryName) => {
        dispatch(switchCategory(categoryName))
    }
    const onShowAllCategories = () => {
        dispatch(showAllCategories())
    }
    return (
        <div className={styles.categories}>
            <h2>Categories</h2>
            <div onClick={onShowAllCategories}>All</div>
            {categories.map(item =>
                <div key={item.id} className={styles.categories__item}>
                    <span onClick={() => onCategorySwitch(item.name)}>{item.name}</span>
                    <span onClick={() => onCategoryDelete(item.id)} className={styles.categories__delete}>X</span>
                </div>)}
            <input onChange={onCategoriesSymbolChange} onKeyPress={onAddCategory}
                   value={symbol} type="text" placeholder='new category'/>
        </div>
    )
}