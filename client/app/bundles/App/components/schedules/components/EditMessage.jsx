import React from 'react';
import {FormGroup, Form, FormControl, Col, Glyphicon} from 'react-bootstrap';

export default class EditMessage extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="bullhorn" />
          </Col>
          <Col xs={11}>
            <FormControl onChange={this.props.handleMessage} maxLength="140" componentClass="textarea" value={this.props.editMessage} />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
