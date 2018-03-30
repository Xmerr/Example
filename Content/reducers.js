import { combineReducers } from 'redux'; // The redux function that creates the store
import {actions} from './actions';

// This reducer will control all the messages
const messages = (
    state = [], // This sets the default state of this reducer to an empty array
    action // This is the action that's being applied to the store
)  => {
    // Remember how the required property in the actions.js file was "type"? here it is
    switch(action.type) { 
        case actions.ADD_MESSAGE:
            return [...state, action.msg]; // Here's the other property, msg, which we've defined in the actions.js file

        case actions.DELETE_MESSAGE:
            return state.filter(msg => msg.id !== action.id);
    }

    // If the action that's applied to the reducer don't affect this reducer, you still must return the current state
    return state; 
}

// An Empty store
export default combineReducers({
    messages // This adds the messages reducer to the store
});