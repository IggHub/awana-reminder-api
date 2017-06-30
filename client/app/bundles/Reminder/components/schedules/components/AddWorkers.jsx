import React from 'react';
import {FormGroup, FormControl, Form, Col, Row, Glyphicon} from 'react-bootstrap';

export default class AddWorkers extends React.Component {
  render(){
    const worker = "worker " + this.props.id;
    const enterPhone = "Enter phone # for " + worker;
    const enterWorker = "Enter " + worker
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="user" />
          </Col>
          <Col xs={11}>
            <FormControl maxLength="30" value={this.props.worker} placeholder={enterWorker} onChange={(e, id) => this.props.handleNewWorkers(e, this.props.id)}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={1}>
            <Glyphicon glyph="phone" />
          </Col>
          <Col xs={11}>
            <FormControl maxLength="14" value={this.props.phone} placeholder={enterPhone} onChange={(e, id) => this.props.handlePhones(e, this.props.id)} />
          </Col>
        </FormGroup>
        <hr />
      </Form>
    )
  }
}
