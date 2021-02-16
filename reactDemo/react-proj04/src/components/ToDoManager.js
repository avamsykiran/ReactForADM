import React from 'react';
import ToDoView from './ToDoView';
import ToDoEditView from './ToDoEditView';
import ToDoAddView from './ToDoAddView';
import { ADD_TASK, MARK_EDIT, MODIFY_TASK, TOGGLE_STATUS, UNMARK_EDIT } from '../service/actions';
import { connect } from 'react-redux';

const ToDoManager = (props) => (
    !props.todos ?
        <p>Sorry! Could Not Load Data.</p>
        :
        <section className="container-fluid p-4">
            <h3>To Do List</h3>

            <div class="mt-3 mb-3">
                <div className="badge badge-info p-2 mr-2">
                    Completed: {props.todos.filter(t => t.isDone).length}
                </div>
                <div className="badge badge-info p-2">
                    Pending: {props.todos.filter(t => !t.isDone).length}
                </div>
            </div>

            <div>
                <ToDoAddView addTask={props.doAddTask} />
            </div>

            <div class="p-2">
                {props.todos.map
                    (
                        (todo, index) =>
                            todo.isEditing ?

                                <ToDoEditView key={index} todo={todo}
                                    toggleStatus={() => { props.handleToggleStatus(todo.id); }}
                                    changeTask={props.doChangeTask} />

                                :

                                <ToDoView key={index} todo={todo}
                                    toggleStatus={() => { props.handleToggleStatus(todo.id); }}
                                    edit={() => { props.handleEdit(todo.id); }} />
                    )
                }
            </div>
        </section>
);

const handleToggleStatus = (id) => {
    return {
        type: TOGGLE_STATUS,
        payload: id
    };
}

const handleEdit = (id) => {
    return {
        type: MARK_EDIT,
        payload: id
    };
}

const handleUnEdit = (id) => {
    return {
        type: UNMARK_EDIT,
        payload: id
    };
}

const doChangeTask = (todo) => {
    return {
        type: MODIFY_TASK,
        payload: { ...todo }
    };
}

const doAddTask = (todo) => {
    return {
        type: ADD_TASK,
        payload: { ...todo }
    };
}

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleToggleStatus: (id) => { dispatch(handleToggleStatus(id)); },
    handleEdit: (id) => { dispatch(handleEdit(id)); },
    doChangeTask: (id, task) => {
        let todo = ownProps.todos.find(t => t.id == id);
        if (task && todo) {
            dispatch(doChangeTask({ ...todo, task: task }));
        } else {
            dispatch(handleUnEdit(id));
        }
    },
    doAddTask: (todo) => { dispatch(doAddTask(todo)); }
});

const hoc = connect(mapStateToProps, mapDispatchToProps);
export default hoc(ToDoManager);

/*
import React from 'react';
import ToDoView from './ToDoView';
import ToDoEditView from './ToDoEditView';
import ToDoAddView from './ToDoAddView';
import {ADD_TASK, MARK_EDIT, MODIFY_TASK, TOGGLE_STATUS} from '../service/actions';
import { connect } from 'react-redux';

class ToDoManager extends React.Component {

    constructor(props) {
        super(props);
    }

    handleToggleStatus = (id) => {
        let action = {
            type:TOGGLE_STATUS,
            payload:id
        };
        this.props.dispatch(action);
    }

    handleEdit = (id) => {
        let action = {
            type:MARK_EDIT,
            payload:id
        };
        this.props.dispatch(action);
    }

    doChangeTask = (id,task) => {
        let todo = this.props.todos.find(t => t.id==id);
        if(todo){
            let action = {
                type:MODIFY_TASK,
                payload:{...todo,task:task}
            }
            this.props.dispatch(action);
        }
    }

    doAddTask = (todo) => {
        let action = {
            type:ADD_TASK,
            payload:todo
        }
        this.props.dispatch(action);
    }

    render() {
        return (
            !this.props.todos?
            <p>Sorry! Could Not Load Data.</p>
            :
            <section className="container-fluid p-4">
                <h3>To Do List</h3>

                <div class="mt-3 mb-3">
                    <div className="badge badge-info p-2 mr-2">
                        Completed: {this.props.todos.filter(t => t.isDone).length}
                    </div>
                    <div className="badge badge-info p-2">
                        Pending: {this.props.todos.filter(t => !t.isDone).length}
                    </div>
                </div>

                <div>
                    <ToDoAddView addTask={this.doAddTask}/>
                </div>

                <div class="p-2">
                    {this.props.todos.map
                        (
                            (todo,index)=>
                            todo.isEditing?

                            <ToDoEditView key={index} todo={todo}
                            toggleStatus={() => {this.handleToggleStatus(todo.id);}}
                            changeTask={this.doChangeTask}/>

                            :

                            <ToDoView key={index} todo={todo}
                            toggleStatus={() => {this.handleToggleStatus(todo.id);}}
                            edit={() => {this.handleEdit(todo.id);}} />
                        )
                    }
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({todos:state.todos});
const hoc = connect(mapStateToProps);
export default hoc(ToDoManager);
*/