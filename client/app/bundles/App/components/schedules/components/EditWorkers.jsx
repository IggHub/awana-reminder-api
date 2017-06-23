import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';

export default class EditWorkers extends React.Component {
  render(){
    return (
      <div>
        <FormGroup>
          <ControlLabel>Worker {this.props.id}:</ControlLabel>
          <FormControl maxLength="30" placeholder="Enter worker" onChange={(e, id) => this.props.handleEditWorkers(e, this.props.id)} value={this.props.worker} />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Phone {this.props.id}:</ControlLabel>
          <FormControl maxLength="14" placeholder="Enter phone" onChange={(e, id) => this.props.handleEditPhones(e, this.props.id)} value={this.props.phone} />
        </FormGroup>
        <hr />
      </div>
    )
  }
}
