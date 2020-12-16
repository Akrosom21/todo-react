import React from "react";
import {TodoInput} from "../TodoInput/TodoInput";
import {appStoreType} from "../../Store/store";
import {useSelector} from 'react-redux'
import {Task} from "../Task/Task";
import {taskType} from "../../Store/inputReducer";
import styles from './TodoField.module.css'

export const TodoField = () => {
    const tasksArr = useSelector((state: appStoreType) => state.todoInput.task)
    const completedTasks = (tasksArr) => {
        return tasksArr.filter((item: taskType) => {
            return item.completed
        })
    }
    const tasksCompletedArr = completedTasks(tasksArr)
    const incompletedTasks = (tasksArr) => {
        return tasksArr.filter((item: taskType) => {
            return !item.completed
        })
    }
    const tasksIncompletedArr = incompletedTasks(tasksArr)
    const tasks = tasksArr.map((item: taskType) => <Task key={item.id} id={item.id}
                                                         completed={item.completed}
                                                         taskText={item.text}/>)
    return (
        <div className={styles.todoField}>
            <TodoInput/>
            {tasks}
        </div>
    )
}