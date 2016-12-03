import React from 'react';
import { connect } from 'react-redux';
import { fetchChats } from './duck';
import Component from './Component';

class Messenger extends React.Component {
  componentDidMount() {
    this.props.fetchChats();
  }

  render() {
    const { user, chats } = this.props;
    return <Component user={user} chats={chats} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: state.messenger.chats,
});

const mapDispatchToProps = {
  fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
