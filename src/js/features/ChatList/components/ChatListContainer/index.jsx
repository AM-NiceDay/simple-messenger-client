import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import { fetchChats } from '../../actions';
import { getChatListChats } from '../../selectors';

import './style.css';

class ChatListContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchChats();
  }

  render() {
    const { chats } = this.props;

    return (
      <div>
        <div className="chat-list__chats-actions">
          <input className="chat-list__chats-search" type="text" placeholder="Search..."/>
          <Link className="chat-list__create-chat" to="/messenger/new" />
        </div>
        {chats.map(chat => (
          <Link to={`/messenger/@${chat._id}`} className="chat-list__chat" key={chat._id}>
            <div className="chat-list__chat-peer-photo">
              <img className="chat-list__chat-peer-image" src={chat.peer.photoUrl} alt="user" />
              <div className="chat-list__chat-peer-status" />
            </div>
            <div className="chat-list__chat-info">
              <span className="chat-list__chat-peer-name">{chat.peer.fullName}</span>
              <span className="chat-list__chat-last-message">{chat.lastMessage ? chat.lastMessage.text : 'No messages here yet'}</span>
            </div>
            {chat.lastMessage && (
              <span className="chat-list__chat-last-message-date">
                <TimeAgo date={chat.lastMessage.created} minPeriod={30} />
              </span>
            )}
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chats: getChatListChats(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchChats }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);
