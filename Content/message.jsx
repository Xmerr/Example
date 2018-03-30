class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.from}: {this.props.message}
            </div>
        )
    }
};

export default Message;