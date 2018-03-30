import Message from "./message";

class MessageManager extends React.Component {
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

export default MessageManager;