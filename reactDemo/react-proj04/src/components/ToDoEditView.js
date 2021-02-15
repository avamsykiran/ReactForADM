import { useState } from "react";

const ToDoEditView = (props) => {
    const [task, setTask] = useState(props.todo.task);

    return (
        <div className="row p-2">
            <div className="col-sm-1">
                {props.todo.id}
            </div>
            <div className="col-sm-5">
                <div className="input-group">
                    <input type="text" value={task} className="form-control"
                        onChange={e => setTask(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button class="btn btn-sm" onClick={e => props.changeTask(props.todo.id, task)}>
                            <i className="fa fa-check" />
                        </button>
                        <button class="btn btn-sm" onClick={e => props.changeTask(props.todo.id)}>
                            <i className="fa fa-close" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-2">
                <button className="btn btn-primary " onClick={props.toggleStatus}>
                    {props.todo.isDone ?
                        <span><i className="fa fa-check-square-o" /> Done</span> :
                        <span><i className="fa fa-square-o" /> Doing</span>
                    }
                </button>
            </div>
        </div>
    );
}

export default ToDoEditView;

