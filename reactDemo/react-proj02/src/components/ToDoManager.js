import React from 'react';
import ToDoView from './ToDoView';
import ToDoEditView from './ToDoEditView';
import ToDoAddView from './ToDoAddView';

class ToDoManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 101, task: 'Upgrade Credit Limit', isDone: false,isEditing:false },
                { id: 102, task: 'Recharge DTH', isDone: true,isEditing:false },
                { id: 103, task: 'Apply for Address Change', isDone: false,isEditing:false },
                { id: 104, task: 'Register Address on Aadhar', isDone: true,isEditing:false },
                { id: 105, task: 'Purchase BMTC Pass', isDone: false,isEditing:false }
            ]
        };
    }

    handleToggleStatus = (index) => {
        let currentTodo = this.state.todos[index];
        currentTodo.isDone=!currentTodo.isDone;
        this.setState({todos:[...this.state.todos]});
    }

    handleEdit = (index) => {
        this.state.todos[index].isEditing=true;
        this.setState({todos:[...this.state.todos]});
    }

    doChangeTask = (id,task) => {
        let todo = this.state.todos.find(t => t.id==id);
        if(todo){
            todo.isEditing=false;            
            if(task){                
                todo.task=task;
            }
            this.setState({todos:[...this.state.todos]});
        }
    }

    doAddTask = (todo) => {        
        this.setState({todos:[...this.state.todos,todo]});
    }

    render() {
        return (
            <section className="container-fluid p-4">
                <h3>To Do List</h3>

                <div class="mt-3 mb-3">
                    <div className="badge badge-info p-2 mr-2">
                        Completed: {this.state.todos.filter(t => t.isDone).length}
                    </div>
                    <div className="badge badge-info p-2">
                        Pending: {this.state.todos.filter(t => !t.isDone).length}
                    </div>
                </div>

                <div>
                    <ToDoAddView addTask={this.doAddTask}/>
                </div>

                <div class="p-2">
                    {this.state.todos.map
                        (
                            (todo,index)=>
                            todo.isEditing?

                            <ToDoEditView key={index} todo={todo} 
                            toggleStatus={() => {this.handleToggleStatus(index);}} 
                            changeTask={this.doChangeTask}/>
                            
                            :
                            
                            <ToDoView key={index} todo={todo} 
                            toggleStatus={() => {this.handleToggleStatus(index);}}
                            edit={() => {this.handleEdit(index);}} />
                        )
                    }
                </div>
            </section>
        );
    }
}

export default ToDoManager;