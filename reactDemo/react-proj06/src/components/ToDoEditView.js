import { useState } from "react";
import { connect } from "react-redux";
import { toggleStatus,changeTask } from '../service/thunkActions';
import { UNMARK_EDIT } from '../service/actions';

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
                <button className="btn btn-primary " onClick={e => props.toggleStatus(todo)}>
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
        dispatch(changeTask(todo));
    },
    cancel : (id) => {
        dispatch({
            type:UNMARK_EDIT,
            payload:id
        });
    },
    toggleStatus: (todo) => {
        dispatch(toggleStatus(todo));
    }
});

const hoc = connect(mapStateToProps,mapDispatchToProps);

export default hoc(ToDoEditView);


