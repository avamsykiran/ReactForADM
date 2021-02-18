import { useState } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../service/thunkActions';

const ToDoAddView = (props) => {
    const [todo, setTodo] = useState({ id: 0, task: '', isDone: false });

    const formSubmited = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo({ id: 0, task: '', isDone: false });
    };

    return (
        <form className="row p-2" onSubmit={formSubmited}>
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

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
    addTodo : (todo) => {
        dispatch(addTodo(todo));
    }
});

const hoc = connect(mapStateToProps,mapDispatchToProps);

export default hoc(ToDoAddView);

