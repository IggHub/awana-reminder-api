import React from 'react';
import {FormGroup, Form, Glyphicon, Col} from 'react-bootstrap';
import DateTime from 'react-datetime';
import dateTimeStyle from '../../schedules/stylesheets/DateTime.css';

export default class EditDate extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="calendar" />
          </Col>
          <Col xs={11}>
            <DateTime onChange={this.props.handleDate} defaultValue={this.props.editDate}/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
