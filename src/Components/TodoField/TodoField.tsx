import React, {useState} from "react";
import {TodoInput} from "../TodoInput/TodoInput";
import {appStoreType} from "../../Store/store";
import {useSelector} from 'react-redux'
import {Task} from "../Task/Task";
import {taskType} from "../../Store/inputReducer";
import styles from './TodoField.module.css'
import {Sorting} from "../Sorting/Sorting";

export const TodoField = (props) => {
    //setting tasks array according to requirements (all, completed, incompleted)
    const tasksArr = useSelector((state: appStoreType) => state.todoInput.categorizedTasks)
    const allTasks = tasksArr.map((item: taskType) => <Task key={item.id} id={item.id}
                                                            completed={item.completed}
                                                            taskText={item.text}
                                                            category={item.category}
    />)
    const completedTasks = allTasks.filter((item) => item.props.completed)
    const incompletedTasks = allTasks.filter((item) => !item.props.completed)
    const [showAllTasks, setShowAllTasks] = useState<boolean>(true)
    const [showIncompletedTasks, setShowIncompletedTasks] = useState<boolean>(false)
    const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(false)
    const onCompletedTasks = () => {
        setShowAllTasks(false)
        setShowIncompletedTasks(false)
        setShowCompletedTasks(true)
    }
    const onIncompletedTasks = () => {
        setShowAllTasks(false)
        setShowIncompletedTasks(true)
        setShowCompletedTasks(false)
    }
    const onAllTasks = () => {
        setShowAllTasks(true)
        setShowIncompletedTasks(false)
        setShowCompletedTasks(false)
    }
    const tasksCount = incompletedTasks.length
    return (
        <div className={styles.todoField}>
            <TodoInput/>
            {showAllTasks && allTasks}
            {showIncompletedTasks && incompletedTasks}
            {showCompletedTasks && completedTasks}
            <Sorting onAllTasks={onAllTasks} onIncompletedTasks={onIncompletedTasks}
                     onCompletedTasks={onCompletedTasks} tasksCount={tasksCount}
                     showAllTasks={showAllTasks} showIncompletedTasks={showIncompletedTasks}
                     showCompletedTasks={showCompletedTasks}
            />
        </div>
    )
}