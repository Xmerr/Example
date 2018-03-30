class Message extends React.Component {
    render() {
        return (
            <div
                onClick={this.props.delete}
            >
                {this.props.from}: {this.props.message}
            </div>
        )
    }
};

export default Message;