// These are unique strings that are used to determine what action is being applied
// We use these because there's no way for us to know what action to perform without a unique identifier
// Realistically we could use an index number, but strings are easier to understand
export const actions = {
    ADD_MESSAGE: "Adds a message to the redux store",
    DELETE_MESSAGE: "Removes a message from the redux store"
};

/**
 * Adds the passed in message to the redux store
 */
export const addMessage = msg => {
    return {
        type: actions.ADD_MESSAGE, // type should be unique for each action being performed
        msg // The other properties could be anything you want
    }
}

/**
 * Removes the passed in ID from the redux store
 */
export const deleteMessage = id => {
    return {
        type: actions.DELETE_MESSAGE,
        id
    }
}