import React from 'react';

import './style.css';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.refs.text.value);
    this.refs.text.value = '';
  }

  render() {
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <input className="chat-form__text-input" ref="text" type="text" placeholder="Write a message..."/>
        <button className="chat-form__submit-button" />
      </form>
    );
  }
}

export default ChatForm;
