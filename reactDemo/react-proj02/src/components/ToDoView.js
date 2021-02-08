
const ToDoView = (props) =>(
    <div className="row p-2">
        <div className="col-sm-1">
            {props.todo.id}
        </div>
        <div className="col-sm-5">
            {props.todo.task}
        </div>
        <div className="col-sm-1">
        {props.todo.isDone?"Done":"Pending.."}
        </div>
        <div className="col-sm-2">
            <button class="btn btn-block btn-secondary" onClick={props.toggleStatus}>
                {props.todo.isDone?"Mark Pending":"Mark Done"}
            </button>
        </div>
    </div>
);

export default ToDoView;

