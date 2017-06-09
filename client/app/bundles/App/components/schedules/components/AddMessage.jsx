import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class AddMessage extends React.Component {
  render(){
    return (
      <FormGroup>
        <ControlLabel>Message:</ControlLabel>
        <FormControl maxLength="140" componentClass="textarea" placeholder="Enter message" onChange={this.props.handleMessage} />
      </FormGroup>
    )
  }
}
