import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';
import { fetchUsers } from './actions';
import { getUsers } from './selectors';

class CreateChat extends React.Component {
  componentDidMount() {
    this.props.handleFetchUsers();
  }
  // componentDidMount() {
  //   const { params } = this.props;
  //
  //   api.createChat.byEmail({
  //     email: params.email,
  //   })
  //     .then(chat => alert(`Created. Chat id: ${chat._id}`))
  //     .catch(err => alert(`Error: ${err.errors.email.message}`));
  // }

  render() {
    const {users} = this.props;

    return <Component users={users} />;
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
});
const mapDispatchToProps = {
  handleFetchUsers: fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChat);
