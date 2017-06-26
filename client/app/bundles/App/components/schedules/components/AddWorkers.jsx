import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';

export default class AddWorkers extends React.Component {
  render(){
    return (
      <div>
        <FormGroup>
          <ControlLabel>Worker {this.props.id}:</ControlLabel>
          <FormControl maxLength="30" value={this.props.worker} placeholder="Enter worker" onChange={(e, id) => this.props.handleNewWorkers(e, this.props.id)}/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Phone:</ControlLabel>
          <FormControl maxLength="14" value={this.props.phone} placeholder="Enter phone" onChange={(e, id) => this.props.handlePhones(e, this.props.id)} />
        </FormGroup>
        <hr />
      </div>
    )
  }
}
