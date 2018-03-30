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

    render() {
        return (
            <div>
                {this.props.messages.map(msg => {
                    return (
                        <Message
                            from={msg.from}
                            message={msg.message}
                        />
                    )
                })}
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