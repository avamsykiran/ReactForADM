import { WAIT } from './actions';
import taskReducer from './tasksReducer';
import tasksReducer from './tasksReducer'

describe("tasksReducer",()=>{

    test("should return default state given no action",()=>{
        let expected = {
            todos: [],
            error: null,
            isLoading:false
        };

        let actual = taskReducer(expected,{type:''});

        expect(actual).toStrictEqual(expected);
    });

    test("should return isLoadig as true given WAIT action",()=>{
        let initialState = {
            todos: [],
            error: null,
            isLoading:false
        };

        let actual = taskReducer(initialState,{type:WAIT});

        expect(actual.isLoading).toBe(true);
    });
})