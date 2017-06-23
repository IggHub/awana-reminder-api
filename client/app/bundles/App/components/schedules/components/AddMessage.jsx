import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class AddMessage extends React.Component {
  render(){
    return (
      <FormGroup>
        <ControlLabel>Message:</ControlLabel>
        <FormControl value={this.props.message} maxLength="140" placeholder="Enter Message" componentClass="textarea" onChange={this.props.handleMessage} />
        <hr />
      </FormGroup>
    )
  }
}
