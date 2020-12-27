import React, {FC} from "react";
import styles from './Sorting.module.css'

type propsType = {
    tasksCount: number
    onAllTasks: any
    onIncompletedTasks: any
    onCompletedTasks: any
    showAllTasks: boolean
    showIncompletedTasks: boolean
    showCompletedTasks: boolean
}
export const Sorting: FC<propsType> = (props) => {
    return (
        <div className={styles.sorting}>
            <div className="sorting__count">{props.tasksCount}items left</div>
            <div className="sorting__btns">
                <button onClick={props.onAllTasks} className={props.showAllTasks ? styles.sorting__btns_active : ''}>All</button>
                <button onClick={props.onIncompletedTasks} className={props.showIncompletedTasks ? styles.sorting__btns_active : ''}>Active</button>
                <button onClick={props.onCompletedTasks} className={props.showCompletedTasks ? styles.sorting__btns_active : ''}>Completed</button>
            </div>
        </div>
    )
}