/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import io from 'socket.io-client';
import ChatMessages from './ChatMessage';

const socket = io('http://localhost:3002/');

class Chat extends React.Component {
  componentDidMount() {
    socket.on('new message', (data) => {
      this.props.send(data);
    });
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  send = (e) => {
    e.preventDefault();
    socket.emit('new message', this.state.message || '');
  };

  render() {
    return (
      <div className="main-container chat bg-light shadow mt-2 flex-column navbar-light ">
        <div className="message-container" id="message-container">
          <ChatMessages state={this.props.messages} />
        </div>

        <form className="input-container form-inline">
          <input
            name="message"
            maxLength="70"
            type="text"
            placeholder="Enter your message"
            className="shadow-lg form-control"
            onChange={this.handleInput}
          />
          <button
            onClick={this.send}
            href="#"
            className="ml-1 btn btn-outline-secondary text-dark bg-light"
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Chat;
