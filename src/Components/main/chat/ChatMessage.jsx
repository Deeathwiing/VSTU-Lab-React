/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ChatMessages extends React.Component {
  componentDidUpdate() {
    const container = document.getElementById('message-container');
    container.scrollTop = container.scrollHeight;
  }

  render() {
    const messages = this.props.state.map(element => (
      <div className="message">
        <p className="mb-0">{element.author}:</p>
        <p className="">{element.message}</p>
      </div>
    ));
    return messages;
  }
}

export default ChatMessages;
