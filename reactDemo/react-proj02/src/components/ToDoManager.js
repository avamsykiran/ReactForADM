import React from 'react';
import ToDoView from './ToDoView';

class ToDoManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 101, task: 'Upgrade Credit Limit', isDone: false },
                { id: 102, task: 'Recharge DTH', isDone: true },
                { id: 103, task: 'Apply for Address Change', isDone: false },
                { id: 104, task: 'Register Address on Aadhar', isDone: true },
                { id: 105, task: 'Purchase BMTC Pass', isDone: false }
            ]
        };
    }

    handleToggleStatus = (index) => {
        let currentTodo = this.state.todos[index];
        currentTodo.isDone=!currentTodo.isDone;
        this.setState({todos:[...this.state.todos]});
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

                <div class="p-2">
                    {this.state.todos.map
                        (
                            (todo,index)=>
                            <ToDoView key={index} todo={todo} 
                            toggleStatus={() => {this.handleToggleStatus(index);}} />
                        )
                    }
                </div>
            </section>
        );
    }
}

export default ToDoManager;