import React, { useEffect } from 'react';
import ToDoView from './ToDoView';
import ToDoEditView from './ToDoEditView';
import ToDoAddView from './ToDoAddView';
import { connect } from 'react-redux';
import { loadData } from '../service/thunkActions';

const ToDoManager = (props) => {

    useEffect(()=>{ props.loadTodos(); },[]);

    return(
        <section className="container-fluid p-4">
            <h3>To Do List</h3>

            <div className="mt-3 mb-3">
                <div className="badge badge-info p-2 mr-2">
                    Completed: {props.todos.filter(t => t.isDone).length}
                </div>
                <div className="badge badge-info p-2">
                    Pending: {props.todos.filter(t => !t.isDone).length}
                </div>
            </div>

            <div>
                <ToDoAddView />
            </div>

            {props.isLoading && 
                <p className="alert alert-info">Please wait while loading data..</p>
            }

            {props.error && 
                <p className="alert alert-danger">
                    Sorry request could not honored.
                    Please retry later. <strong>{props.error.message}</strong>
                </p>
            }

            <div className="p-2">
                {props.todos.map
                    (
                        (todo, index) =>
                            todo.isEditing ? <ToDoEditView key={index} todo={todo} />
                                : <ToDoView key={index} todo={todo} />
                    )
                }
            </div>
        </section>
    )
};

const mapStateToProps = (state) => ({
    todos: state.todos,
    error: state.error,
    isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    loadTodos: () => {dispatch(loadData());}
});

const hoc = connect(mapStateToProps,mapDispatchToProps);
export default hoc(ToDoManager);
