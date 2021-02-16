import React from 'react';
import ToDoView from './ToDoView';
import ToDoEditView from './ToDoEditView';
import ToDoAddView from './ToDoAddView';
import { connect } from 'react-redux';

const ToDoManager = (props) => (
    !props.todos ?
        <p>Sorry! Could Not Load Data.</p>
        :
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
);

const mapStateToProps = (state) => ({ todos: state.todos });
const hoc = connect(mapStateToProps);
export default hoc(ToDoManager);
