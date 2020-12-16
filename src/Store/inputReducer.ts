//Create action creators
const ADD_SYMBOL = 'inputReducer/ADD_SYMBOL'
const ADD_TASK = 'inputReducer/ADD_TASK'
const DELETE_TASK = 'inputReducer/DELETE_TASK'
const CHANGE_TASK_STATUS = 'inputReducer/CHANGE_TASK_STATUS'
const CHANGE_TASK = 'inputReducer/CHANGE_TASK'

type addSymbolType = {
    type: typeof ADD_SYMBOL
    symbol: string
}
export const addSymbol = (symbol: string): addSymbolType => ({type: ADD_SYMBOL, symbol})
type addTaskType = {
    type: typeof ADD_TASK
}
export const addTask = (): addTaskType => ({type: ADD_TASK})
type deleteTaskType = {
    type: typeof DELETE_TASK
    id: number
}
export const deleteTask = (id: number): deleteTaskType => ({type: DELETE_TASK, id})
type changeTaskStatusType = {
    type: typeof CHANGE_TASK_STATUS
    id: number
}
export const changeTaskStatus = (id: number): changeTaskStatusType => ({type: CHANGE_TASK_STATUS, id})
type changeTaskType = {
    type: typeof CHANGE_TASK
    id: number
    text: string
}
export const changeTask = (id: number, text: string): changeTaskType => ({type: CHANGE_TASK, id, text})
type actionsType = addSymbolType | addTaskType | deleteTaskType | changeTaskStatusType | changeTaskType
//initial state
export type taskType = {
    id: number
    text: string
    completed: boolean
}
const initialState = {
    inputSymbols: '',
    task: [
        {id: 1, text: 'finish app', completed: true},
        {id: 2, text: 'start next app', completed: false}
    ] as Array<taskType>
}

type InitialState = typeof initialState

//Create reducer
export const inputReducer = (state = initialState, action: actionsType): InitialState => {
    const stateCopy = {...state}
    switch (action.type) {
        case ADD_SYMBOL:
            return {
                ...state,
                inputSymbols: action.symbol
            }
        case ADD_TASK:
            const newTask = {
                id: state.task[state.task.length - 1].id + 1,
                text: state.inputSymbols,
                completed: false
            }
            return {
                ...state,
                task: [...state.task, newTask],
                inputSymbols: ''
            }
        case DELETE_TASK:
            return {
                ...state,
                task: [...state.task.filter(task => task.id !== action.id)]
            }
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                task: [...state.task.map(task => {
                    if (task.id === action.id) {
                        task.completed = !task.completed
                    }
                    return task
                })]
            }
        case CHANGE_TASK:
            return {
                ...state,
                task: [...state.task.map(task => {
                    if (task.id === action.id) {
                        task.text = action.text
                    }
                    return task
                })]
            }
        default:
            return stateCopy
    }
}