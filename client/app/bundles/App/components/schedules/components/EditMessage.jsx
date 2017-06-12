import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class EditMessage extends React.Component {
  render(){
    return (
      <FormGroup>
        <ControlLabel>Message:</ControlLabel>
        <FormControl onChange={this.props.handleMessage} maxLength="140" componentClass="textarea" value={this.props.message} />
      </FormGroup>
    )
  }
}
