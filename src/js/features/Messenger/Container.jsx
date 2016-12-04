import React from 'react';
import { connect } from 'react-redux';
import { fetchChats } from './actions';
import { getChats } from './selectors';
import Component from './Component';

class Messenger extends React.Component {
  componentDidMount() {
    this.props.fetchChats();
  }

  render() {
    const { children, user, chats } = this.props;
    return <Component user={user} chats={chats} children={children} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: getChats(state),
});

const mapDispatchToProps = {
  fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
