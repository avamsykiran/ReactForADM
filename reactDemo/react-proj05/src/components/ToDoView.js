import { connect } from 'react-redux';
import { TOGGLE_STATUS, MARK_EDIT } from '../service/actions';

const ToDoView = (props) =>(
    <div className="row p-2">
        <div className="col-sm-1">
            {props.todo.id}
        </div>
        <div className="col-sm-5" onDoubleClick={(event) => {props.edit(props.todo.id);}}>
            {props.todo.task}
        </div>
        <div className="col-sm-2">
            <button className="btn btn-primary " onClick={(event) => {props.toggleStatus(props.todo.id);}}>
                {props.todo.isDone?
                    <span><i className="fa fa-check-square-o"/> Done</span>:
                    <span><i className="fa fa-square-o"/> Doing</span>
                }
            </button>
        </div>
    </div>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    edit : (id) => {
        dispatch({
            type:MARK_EDIT,
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

export default hoc(ToDoView);


