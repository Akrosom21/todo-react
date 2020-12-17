import React, {FC} from "react";
import styles from './Sorting.module.css'

type propsType = {
    tasksCount: number
    onAllTasks: any
    onIncompletedTasks: any
    onCompletedTasks: any
}
export const Sorting: FC<propsType> = (props) => {
    return (
        <div className={styles.sorting}>
            <div className="sorting__count">{props.tasksCount}items left</div>
            <div className="sorting__btns">
                <button onClick={props.onAllTasks} className="sorting__all">All</button>
                <button onClick={props.onIncompletedTasks} className="sorting__active">Active</button>
                <button onClick={props.onCompletedTasks} className="sorting__completed">Completed</button>
            </div>
        </div>
    )
}