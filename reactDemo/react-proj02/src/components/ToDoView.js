
const ToDoView = (props) =>(
    <div className="row p-2">
        <div className="col-sm-1">
            {props.todo.id}
        </div>
        <div className="col-sm-5" onDoubleClick={props.edit}>
            {props.todo.task}
        </div>
        <div className="col-sm-2">
            <button className="btn btn-primary " onClick={props.toggleStatus}>
                {props.todo.isDone?
                    <span><i className="fa fa-check-square-o"/> Done</span>:
                    <span><i className="fa fa-square-o"/> Doing</span>
                }
            </button>
        </div>
    </div>
);

export default ToDoView;

