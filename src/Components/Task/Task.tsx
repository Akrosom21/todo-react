import React, {FC, useEffect, useState} from "react"
import styles from './Task.module.css'
import {changeTaskStatus, deleteTask, changeTask, changeTaskCategory} from "../../Store/inputReducer";
import {useDispatch, useSelector} from 'react-redux'
import {categoriesType} from "../../Store/categoriesReducer";
import {appStoreType} from "../../Store/store";
import {Checkbox, Input, Select} from "antd";
import { DeleteOutlined } from '@ant-design/icons';

type propsType = {
    taskText: string
    id: number
    completed: boolean
    category: string
}

export const Task: FC<propsType> = (props) => {
    //creating ability to edit task
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editedText, setEditedText] = useState<string>(props.taskText)
    const onEditMode = () => {
        setEditMode(true)
    }
    const onEditedChange = (e) => {
        setEditedText(e.currentTarget.value)
    }
    //creating ability to change task
    const onChangeTask = (id, e) => {
        if (e.key === 'Enter') {
            dispatch(changeTask(id, editedText))
            setEditMode(false)
        }
    }
    //creating ability to delete task
    const dispatch = useDispatch()
    const onDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }
    //creating ability to completed task
    const onTaskCompleted = (id) => {
        dispatch(changeTaskStatus(id))
    }
    //create ability to change category
    const categoriesArr: Array<categoriesType> = useSelector((state: appStoreType) => state.todoCategories.categories)
    const [selectedCategory, setSelectedCategory] = useState<string>(props.category)
    const onChangeSelectedCategory = (id, value) => {
        dispatch(changeTaskCategory(id, value))
    }
    useEffect(() => {
        setSelectedCategory(props.category)
    }, [props.category])
    const { Option } = Select;
    return (
        <div className={props.completed ? `${styles.task} ${styles.completed}` : styles.task}>
            <div className={styles.task__check}>
                <Checkbox onChange={() => onTaskCompleted(props.id)} defaultChecked={props.completed}></Checkbox>
            </div>
            {editMode
                ?
                <div className='task__edit-field'>
                    <Input onKeyPress={(e) => onChangeTask(props.id, e)} onChange={onEditedChange}
                           value={editedText} autoFocus={true} type="text" className="task__edit"/>
                    <Select defaultValue={selectedCategory} onChange={(e) => onChangeSelectedCategory(props.id, e)} className="task__edit-select">
                        {categoriesArr.map((item: categoriesType) => <Option key={item.id} value={item.name}>{item.name}</Option>)}
                    </Select>
                </div>
                :
                <span onDoubleClick={onEditMode} className={styles.task__text}>{props.taskText}</span>
            }
            <DeleteOutlined className={styles.delete} onMouseDown={() => onDeleteTask(props.id)} />
        </div>
    )
}