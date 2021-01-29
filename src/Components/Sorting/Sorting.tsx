import React, {FC} from "react";
import styles from './Sorting.module.css'
import { Button } from 'antd';

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
            <div className={styles.sorting__count}>{props.tasksCount}items left</div>
            <div className="sorting__btns">
                <Button className={styles.sorting__btn} onClick={props.onAllTasks} type="primary">All</Button>
                <Button className={styles.sorting__btn} onClick={props.onIncompletedTasks} type="primary">Active</Button>
                <Button className={styles.sorting__btn} onClick={props.onCompletedTasks} type="primary">Completed</Button>
            </div>
        </div>
    )
}