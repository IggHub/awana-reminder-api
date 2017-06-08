import React from 'react';

class Message extends React.Component {
  render(){
    return (
      <div>
        <h2>Message:</h2>
        <h6>{this.props.name}!</h6>
        <h6>{this.props.text}</h6>
      </div>
    )
  }
}

export default Message;
