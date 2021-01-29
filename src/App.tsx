import React, {useEffect} from 'react'
import {TodoField} from './Components/TodoField/TodoField';
import {Categories} from "./Components/Categories/Categories";
import './App.css'
import { Layout} from 'antd';
import "antd/dist/antd.css";
import {useParams} from "react-router-dom";
import {switchCategory} from "./Store/inputReducer";
import {useDispatch} from 'react-redux'

function App() {
    let {category} = useParams()
    const dispatch = useDispatch()
    useEffect(()=> {
        if(category) {
            dispatch(switchCategory(category))
        }
    },[])
    return (
        <>
            <Layout>
                <Categories/>
                <TodoField/>
            </Layout>
        </>
    );
}

export default App
