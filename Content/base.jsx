import { createStore } from 'redux';
import { Provider } from 'react-redux'
import app from './reducers';
let store = createStore(app);

import MessageManager from "./messageManager";
import { addMessage } from './actions';
global.getState = () => store.getState();

global.hub = $.connection.chatHub;
global.hub.client.addMessage = (from, message) => {
    store.dispatch(addMessage({from, message}))
};
$.connection.hub.start();

class Base extends React.Component {
    // This function is required on all React.Components as it's what's called to render the component
    render() {
        return (
            <Provider store={store}>
                <MessageManager />
            </Provider>
        )
    }
};

// This renders the passed in component to the passed in DOM
ReactDOM.render(
    <Base />, // Name of the React.Component we just made
    document.getElementById('content') // Remember the div we ID'd 'content' on the _Layout.cshtml page?
);