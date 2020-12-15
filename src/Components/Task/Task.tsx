import React, {FC} from "react"
import styles from './Task.module.css'
import {changeTaskStatus, deleteTask} from "../../Store/inputReducer";
import {useDispatch} from 'react-redux'

type propsType = {
    taskText: string
    id: number
    completed: boolean
}

export const Task: FC<propsType> = (props) => {
    const dispatch = useDispatch()
    const onDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }
    const onTaskCompleted = (id) => {
        dispatch(changeTaskStatus(id))
    }
    return (
        <div className={props.completed ? `${styles.task} ${styles.completed}` : styles.task}>
            <div className="task__check">
                <input onClick={() => onTaskCompleted(props.id)} type="checkbox" checked={props.completed} className="task__input"/>
            </div>
            <span className={styles.task__text}>{props.taskText}</span>
            <div onMouseDown={() => onDeleteTask(props.id)} className={styles.delete}>X</div>
        </div>
    )
}