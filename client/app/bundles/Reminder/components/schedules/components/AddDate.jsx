import React from 'react';
import {Form, FormGroup, Glyphicon, Col} from 'react-bootstrap';
import DateTime from 'react-datetime';
import dateTimeStyle from '../../schedules/stylesheets/DateTime.css';

export default class AddDate extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="calendar" />
          </Col>
          <Col xs={11}>
            <DateTime inputProps={{ placeholder: 'Enter Date'}} value={this.props.date} ref="addDate" onChange={this.props.handleDate} />
          </Col>
        </FormGroup>
        <hr />
      </Form>
    )
  }
}
