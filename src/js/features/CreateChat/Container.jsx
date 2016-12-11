import React from 'react';
import api from '../../modules/api';

class CreateChat extends React.Component {
  componentDidMount() {
    const { params } = this.props;

    api.createChat.byEmail({
      email: params.email,
    })
      .then(chat => alert(`Created. Chat id: ${chat._id}`))
      .catch(err => alert(`Error: ${err.errors.email.message}`));
  }

  render() {
    return <div>Creating new chat</div>;
  }
}

export default CreateChat;
