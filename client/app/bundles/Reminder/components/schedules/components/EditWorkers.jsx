import React from 'react';
import {FormGroup, FormControl, Col, Row, Glyphicon, Form} from 'react-bootstrap';

export default class EditWorkers extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="user" />
          </Col>
          <Col xs={11}>
            <FormControl maxLength="30" placeholder="Enter worker" onChange={(e, id) => this.props.handleEditWorkers(e, this.props.id)} value={this.props.worker} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="phone" />
          </Col>
          <Col xs={11}>
            <FormControl maxLength="14" placeholder="Enter phone" onChange={(e, id) => this.props.handleEditPhones(e, this.props.id)} value={this.props.phone} />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
