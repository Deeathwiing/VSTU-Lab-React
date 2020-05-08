import { connect } from 'react-redux';

import Chat from '../components/main/chat/Chat';
import { messagesSelector } from '../selectors/Selectors';
import { MessagesFetchDataSuccess } from '../redux/actionCreators/MessagesActionCreator';

const mapStateToProps = state => ({
  messages: messagesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  send: (data) => {
    dispatch(MessagesFetchDataSuccess(data));
  },
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
