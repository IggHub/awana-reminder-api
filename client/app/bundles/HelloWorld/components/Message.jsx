import React from 'react';

class Message extends React.Component {
  render(){
    return (
      <div>
        <h6>{this.props.name}!</h6>
      </div>
    )
  }
}

export default Message;
