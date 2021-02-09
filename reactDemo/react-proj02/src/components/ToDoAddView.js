import { useState } from "react";

const ToDoAddView = (props) => {
    const [todo, setTodo] = useState({ id: 0, task: '', isDone: false });

    return (
        <form className="row p-2">
            <div className="col-sm-1">
                <input type="text" value={todo.id} className="form-control"
                    onChange={e => setTodo({ ...todo, id: e.target.value })}
                />
            </div>
            <div className="col-sm-5">
                <input type="text" value={todo.task} className="form-control"
                    onChange={e => setTodo({ ...todo, task: e.target.value })}
                />
            </div>
            <div className="col-sm-2">
                <button className="btn btn-primary ">
                    <span><i className="fa fa-plus" /> ADD</span>
                </button>
            </div>
        </form>
    );
}

export default ToDoAddView;

