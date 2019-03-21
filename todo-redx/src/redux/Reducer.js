import { combineReducers } from 'redux';

const todoApp = combineReducers({todo});
function todo(state=[], action){
    switch(action.type) {
        case "ADD":
        return [
            ...state,
            action.type
        ]
        default:
            return state;
    }
}
export default todoApp;