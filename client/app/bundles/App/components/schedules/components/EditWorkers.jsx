import React from 'react';

export default class EditWorkers extends React.Component {
  render(){
    return (
      <div>
        Hello {this.props.worker}
        Hello {this.props.phone}
      </div>
    )
  }
}
