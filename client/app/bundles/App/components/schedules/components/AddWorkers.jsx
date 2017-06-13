import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';

export default class AddWorkers extends React.Component {
  render(){
    return (
      <div>
        <FormGroup>
          <ControlLabel>Worker:</ControlLabel>
          <FormControl value={this.props.newWorkers[this.props.id-1].name} maxLength="30" placeholder="Enter worker" onChange={(e, id) => this.props.handleNewWorkers(e, this.props.id)}/>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Phone:</ControlLabel>
          <FormControl value={this.props.newWorkers[this.props.id-1].phone} maxLength="14" placeholder="Enter phone" onChange={(e, id) => this.props.handlePhones(e, this.props.id)} />
        </FormGroup>
        <hr />
      </div>
    )
  }
}
