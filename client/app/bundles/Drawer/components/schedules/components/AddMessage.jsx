import React from 'react';
import {Form, FormGroup, FormControl, Col, Glyphicon} from 'react-bootstrap';

export default class AddMessage extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="bullhorn" />
          </Col>
          <Col xs={11}>
            <FormControl value={this.props.message} maxLength="140" placeholder="Enter Message" componentClass="textarea" onChange={this.props.handleMessage} />
          </Col>
        </FormGroup>  
      </Form>
    )
  }
}
