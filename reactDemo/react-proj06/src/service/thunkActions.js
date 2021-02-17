import axios from 'axios';
import { ADD_TASK, ERROR, LOAD_TODOS, MODIFY_TASK, WAIT } from './actions';

const API_URL = "http://localhost:9999/todos";

export const loadData = () => (dispatch)=>{

    dispatch({type:WAIT});
    axios.get(API_URL).then(
        (response) =>{
            dispatch({
                type:LOAD_TODOS,
                payload:response.data
            });
        },
        (error) =>{
            dispatch({
                type:ERROR,
                payload:error
            });
        }
    );
};

export const addTodo = (todo) => (dispatch)=>{

    dispatch({type:WAIT});
    axios.post(API_URL,todo).then(
        (response) =>{
            dispatch({
                type:ADD_TASK,
                payload:response.data
            });
        },
        (error) =>{
            dispatch({
                type:ERROR,
                payload:error
            });
        }
    );

};

const updateTodo = (todo) => (dispatch)=>{

    dispatch({type:WAIT});
    axios.put(`${API_URL}/${todo.id}`,todo).then(
        (response) =>{
            dispatch({
                type:MODIFY_TASK,
                payload:response.data
            });
        },
        (error) =>{
            dispatch({
                type:ERROR,
                payload:error
            });
        }
    );

};

export const toggleStatus = (todo) =>{
    todo.isDone = !todo.isDone;
    return updateTodo(todo);
};

export const changeTask = (todo,task) =>{
    todo.task=task;
    return updateTodo(todo);
};