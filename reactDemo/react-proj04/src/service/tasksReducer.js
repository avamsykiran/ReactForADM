import { ADD_TASK, MARK_EDIT, MODIFY_TASK, TOGGLE_STATUS, UNMARK_EDIT } from "./actions";

const initialState = () => ({
    todos: [
        { id: 101, task: 'Upgrade Credit Limit', isDone: false,isEditing:false },
        { id: 102, task: 'Recharge DTH', isDone: true,isEditing:false },
        { id: 103, task: 'Apply for Address Change', isDone: false,isEditing:false },
        { id: 104, task: 'Register Address on Aadhar', isDone: true,isEditing:false },
        { id: 105, task: 'Purchase BMTC Pass', isDone: false,isEditing:false }
    ]
});

const taskReducer = (oldState = initialState(),action) => {
    let modifiedState = null;
    
    let todos=null;
    let taskId=null;

    switch(action.type){
        case ADD_TASK:
            let task = action.payload;
            todos = [...oldState.todos,task];
            modifiedState = {...oldState,todos:todos};
            break;
        case TOGGLE_STATUS:
            taskId = action.payload;
            todos = oldState.todos.map(
                t => t.id==taskId?{...t,isDone:!t.isDone}:t
            );
            modifiedState = {...oldState,todos:todos};
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
                t => t.id==task.id?todo:t
            );
            modifiedState = {...oldState,todos:todos};
            break;
        default:
            modifiedState = {...oldState};
    }

    return modifiedState;
};

export default taskReducer;