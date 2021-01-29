import React from "react";
import styles from './Categories.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {appStoreType} from "../../Store/store";
import {addCategory, addSymbolCategories, categoriesType, deleteCategory} from "../../Store/categoriesReducer";
import {showAllCategories, switchCategory} from "../../Store/inputReducer";
import {NavLink} from 'react-router-dom'
import {Input} from "antd";
import {Layout, Menu} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const {Sider} = Layout;

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
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu theme="dark" mode="inline">
                <Menu.Item key="01">
                    <NavLink exact to='/' activeClassName={styles.categories__item_active}
                             className={styles.categories__text} onClick={onShowAllCategories}>All</NavLink>
                </Menu.Item>
                {categories.map(item =>
                    <Menu.Item key={item.id} className={styles.categories__item}>
                        <NavLink to={`/${item.name}`} activeClassName={styles.categories__item_active}
                                 className={styles.categories__text}
                                 onClick={() => onCategorySwitch(item.name)}>{item.name}</NavLink>
                        <DeleteOutlined onClick={() => onCategoryDelete(item.id)} className={styles.categories__delete} />
                    </Menu.Item>)}
                <Menu.Item key='02' className={styles.categories__item}>
                    <Input onChange={onCategoriesSymbolChange} onKeyPress={onAddCategory}
                           value={symbol} type="text" placeholder='new category'/>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}