import { FETCH_TASKS_PENDING, FETCH_TASKS_SUCCESS, DELETE_TASK, UPDATE_TASK, FETCH_TASK_DETAILS, TOGGLE_TASK_COMPLETE } from '../../actions/types';

const initialState = {
  isFetching: false,
  tasks: []
}

const taskReducer = (state=initialState, action) => {
    switch(action.type){

        case FETCH_TASKS_PENDING:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                tasks: action.payload
            }

        case DELETE_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter((task)=>task.id !== action.payload)
            }
        
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map( task =>  task.id === action.payload.id ? ( task = action.payload ) : task )
            }
        
        case TOGGLE_TASK_COMPLETE:
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? ( task.completed = !task.completed ) : task)
            }

        default:
            return state;
    }
}


export default taskReducer;