import { ADD_TASK, ERROR, LOAD_TODOS, MARK_EDIT, MODIFY_TASK, TOGGLE_STATUS, UNMARK_EDIT, WAIT } from "./actions";

const initialState = () => ({
    todos: [],
    error: null,
    isLoading:false
});

const taskReducer = (oldState = initialState(),action) => {
    let modifiedState = null;
    
    let todos=null;
    let taskId=null;

    switch(action.type){
        case LOAD_TODOS:
            let todos = action.payload;
            todos.forEach(element => {
                element.isEditing=false;
            });
            modifiedState = {...oldState,todos:todos,isLoading:false,error:null};
            break;
        case ADD_TASK:
            let todo = action.payload;
            todos = [...oldState.todos,todo];
            modifiedState = {...oldState,todos:todos,isLoading:false,error:null};
            break;       
        case MARK_EDIT:
            taskId = action.payload;
            todos = oldState.todos.map(
                t => t.id==taskId?{...t,isEditing:true}:t
            );
            modifiedState = {...oldState,todos:todos};
            break;
        case UNMARK_EDIT:
            taskId = action.payload;
            todos = oldState.todos.map(
                t => t.id==taskId?{...t,isEditing:false}:t
            );
            modifiedState = {...oldState,todos:todos};
            break;
        case MODIFY_TASK:
            let todo = action.payload;                        
            todos = oldState.todos.map(
                t => t.id==todo.id?todo:t
            );
            modifiedState = {...oldState,todos:todos,isLoading:false,error:null};
            break;
        case WAIT:
            modifiedState = {...oldState,isLoading:true,error:null};
            break;
        case ERROR:
            modifiedState = {...oldState,isLoading:false,error:action.payload};
            break;
        default:
            modifiedState = {...oldState};
    }

    return modifiedState;
};

export default taskReducer;