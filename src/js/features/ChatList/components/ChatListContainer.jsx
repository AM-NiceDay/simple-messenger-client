import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import { fetchChats } from '../actions';
import { getChatListChats } from '../selectors';

class ChatListContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchChats();
  }

  render() {
    const chats = this.props.chats;
    const user = {};

    return (
      <div>
        <div className="messenger__menu-chats-actions">
          <input className="messenger__menu-chats-search" type="text" placeholder="Search..."/>
          <Link className="messenger__menu-create-chat" to="/messenger/new" />
        </div>
        {chats.map(chat => (
          <Link to={`/messenger/@${chat._id}`} className="messenger__menu-chat" key={chat._id}>
            <div className="messenger__menu-chat-peer-photo">
              <img className="messenger__menu-chat-peer-image" src={chat.peer.photoUrl} alt="user" />
              <div className="messenger__menu-chat-peer-status" />
            </div>
            <div className="messenger__menu-chat-info">
              <span className="messenger__menu-chat-peer-name">{chat.peer.fullName}</span>
              <span className="messenger__menu-chat-last-message">{chat.lastMessage ? chat.lastMessage.text : 'No messages here yet'}</span>
            </div>
            {chat.lastMessage && (
              <span className="messenger__menu-chat-last-message-date">
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
