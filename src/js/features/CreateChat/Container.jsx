import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';
import { fetchUsers, createChat } from './actions';
import { getUsers } from './selectors';

class CreateChat extends React.Component {
  componentDidMount() {
    this.props.handleFetchUsers();
  }

  render() {
    const { users, handleCreateChat } = this.props;

    return <Component users={users} onCreateChat={handleCreateChat} />;
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
});
const mapDispatchToProps = {
  handleFetchUsers: fetchUsers,
  handleCreateChat: createChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChat);
