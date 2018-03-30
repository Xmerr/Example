import {connect} from 'react-redux';
import Message from "./message";
import { addMessage, deleteMessage } from './actions';

class MessageManager extends React.Component {
    componentDidMount() {
        this.props.add({
            from: "1",
            message: "Test Message"
        });
        this.props.add({
            from: "2",
            message: "Test Message 2"
        });
        this.props.add({
            from: "1",
            message: "Test Message 3"
        });
    }

    /**
     * Adds a new message
     */
    submit() {
        this.props.add({ // If you look at mapDispatchToProps you'll find this property definition
            from: "Me", // Could be any string
            message: this.refs.input.value // This grabs the value of the input reference
        });
    }

    render() {
        return (
            <div>
                {this.props.messages.map(msg => {
                    return (
                        <Message
                            key={msg.id}
                            from={msg.from}
                            message={msg.message}
                            delete={() => this.props.delete(msg.id)} // If you look at mapDispatchToProps you'll find this property definition
                        />
                    )
                })}

                <input ref="input" />
                <button
                    type="button"
                    onClick={() => this.submit()}
                >
                    Send
                </button>
            </div>
        )
    }
};

// Here you are able to get specific reducer values from the store
const mapStateToProps = state => {
    return {
        messages: state.messages
    }
};

// Here you can say which actions you want to be able to perform from this component
const mapDispatchToProps = dispatch => {
    return {
        add: msg => dispatch(addMessage(msg)),
        delete: id => dispatch(deleteMessage(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageManager);