import React, {useEffect, useState} from "react";
import {TodoInput} from "../TodoInput/TodoInput";
import {appStoreType} from "../../Store/store";
import {useSelector} from 'react-redux'
import {Task} from "../Task/Task";
import {taskType} from "../../Store/inputReducer";
import styles from './TodoField.module.css'
import {Sorting} from "../Sorting/Sorting";

export const TodoField = () => {
    //setting tasks array according to requirements (all, completed, incompleted)
    const tasksArr = useSelector((state: appStoreType) => state.todoInput.task)
    const allTasks = tasksArr.map((item: taskType) => <Task key={item.id} id={item.id}
                                                            completed={item.completed}
                                                            taskText={item.text}/>)
    const completedTasks = allTasks.filter((item) => item.props.completed)
    const incompletedTasks = allTasks.filter((item) => !item.props.completed)
    const [tasks, setTasks] = useState<Array<taskType>>(allTasks)
    const onCompletedTasks = (): void => {
        setTasks(completedTasks)
    }
    const onIncompletedTasks = (): void => {
        setTasks(incompletedTasks)
    }
    const onAllTasks = (): void => {
        setTasks(allTasks)
    }
    useEffect(() => {
        setTasks(allTasks)
    }, [tasksArr])
    const tasksCount = incompletedTasks.length
    return (
        <div className={styles.todoField}>
            <TodoInput/>
            {tasks}
            <Sorting onAllTasks={onAllTasks} onIncompletedTasks={onIncompletedTasks}
                     onCompletedTasks={onCompletedTasks} tasksCount={tasksCount}/>
        </div>
    )
}