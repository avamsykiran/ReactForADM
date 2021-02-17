import { useState } from "react";
import { connect } from "react-redux";
import { UNMARK_EDIT,MODIFY_TASK,TOGGLE_STATUS } from '../service/actions';

const ToDoEditView = (props) => {
    const [todo, setTodo] = useState({...props.todo});

    return (
        <div className="row p-2">
            <div className="col-sm-1">
                {todo.id}
            </div>
            <div className="col-sm-5">
                <div className="input-group">
                    <input type="text" value={todo.task} className="form-control"
                        onChange={e => setTodo({...todo,task:e.target.value})}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-sm" onClick={e => props.change(todo)}>
                            <i className="fa fa-check" />
                        </button>
                        <button className="btn btn-sm" onClick={e => props.cancel(todo.id)}>
                            <i className="fa fa-close" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-2">
                <button className="btn btn-primary " onClick={e => props.toggleStatus(todo.id)}>
                    {props.todo.isDone ?
                        <span><i className="fa fa-check-square-o" /> Done</span> :
                        <span><i className="fa fa-square-o" /> Doing</span>
                    }
                </button>
            </div>
        </div>
    );
}


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    change: (todo) =>{
        dispatch({
            type:MODIFY_TASK,
            payload:{...todo,isEditing:false}
        });
    },
    cancel : (id) => {
        dispatch({
            type:UNMARK_EDIT,
            payload:id
        });
    },
    toggleStatus: (id) => {
        dispatch({
            type:TOGGLE_STATUS,
            payload:id
        });
    }
});

const hoc = connect(mapStateToProps,mapDispatchToProps);

export default hoc(ToDoEditView);


