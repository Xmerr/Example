var messageArray = [
    {
        from: "Person 1",
        message: "Test Message"
    },
    {
        from: "Person 2",
        message: "Test Message 2"
    },
    {
        from: "Person 1",
        message: "Test Message 3"
    },
];

import MessageManager from "./messageManager.jsx";

class Base extends React.Component {
    // This function is required on all React.Components as it's what's called to render the component
    render() {
        return (
            <div>
                <MessageManager 
                    messages={this.props.messages}
                />
            </div>
        )
    }
};

// This renders the passed in component to the passed in DOM
ReactDOM.render(
    <Base 
        messages={messageArray}
    />, // Name of the React.Component we just made
    document.getElementById('content') // Remember the div we ID'd 'content' on the _Layout.cshtml page?
);