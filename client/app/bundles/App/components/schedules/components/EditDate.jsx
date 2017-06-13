import React from 'react';
import {FormGroup, ControlLabel} from 'react-bootstrap';
import DateTime from 'react-datetime';
import dateTimeStyle from '../../schedules/stylesheets/DateTime.css';

export default class EditDate extends React.Component {
  render(){
    return (
      <FormGroup>
        <ControlLabel>Date:</ControlLabel>
        <DateTime onChange={this.props.handleDate} defaultValue={this.props.editDate}/>
      </FormGroup>
    )
  }
}
