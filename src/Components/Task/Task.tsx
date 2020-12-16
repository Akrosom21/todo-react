import React, {FC, useState} from "react"
import styles from './Task.module.css'
import {changeTaskStatus, deleteTask, changeTask} from "../../Store/inputReducer";
import {useDispatch} from 'react-redux'

type propsType = {
    taskText: string
    id: number
    completed: boolean
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
    return (
        <div className={props.completed ? `${styles.task} ${styles.completed}` : styles.task}>
            <div className="task__check">
                <input onClick={() => onTaskCompleted(props.id)} type="checkbox" defaultChecked={props.completed}
                       className="task__input"/>
            </div>
            {editMode
                ?
                <input onKeyPress={(e) => onChangeTask(props.id, e)} onChange={onEditedChange}
                       value={editedText} autoFocus={true} type="text" className="task__edit"/>
                :
                <span onDoubleClick={onEditMode} className={styles.task__text}>{props.taskText}</span>
            }
            <div onMouseDown={() => onDeleteTask(props.id)} className={styles.delete}>X</div>
        </div>
    )
}