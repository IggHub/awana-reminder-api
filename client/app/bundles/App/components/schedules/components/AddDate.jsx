import React from 'react';
import {FormGroup, ControlLabel} from 'react-bootstrap';
import DateTime from 'react-datetime';
import dateTimeStyle from '../../schedules/stylesheets/DateTime.css';

export default class AddDate extends React.Component {
  render(){
    return (
      <FormGroup>
        <ControlLabel>Date:</ControlLabel>
        <DateTime value={this.props.date} ref="addDate" onChange={this.props.handleDate} />
      </FormGroup>
    )
  }
}
