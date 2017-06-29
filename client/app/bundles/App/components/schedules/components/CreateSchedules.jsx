import React from 'react';

import AddDate from './AddDate';
import AddWorkers from './AddWorkers';
import AddMessage from './AddMessage';
import ErrorMessage from './ErrorMessage';

import {Row, Col, Button, FormGroup, Glyphicon} from 'react-bootstrap';

const styles = {
  verticalLine: {
    borderLeft: "1px solid #D4D4D4"
  },
  button: {
    width: '100%'
  },
  spacer: {
    marginTop: '50px'
  },
  errorMessage: {
    color: 'white',
    backgroundColor: '#f44336',
    position: 'fixed',
    right: '125px',
    bottom: '25px',
    width: '250px',
    height: '20px',
    textAlign: 'center',
    opacity: '0.7'
  },
  formBox: {
    background: 'white',
    padding: '20px',
    border: 'none',
    maxWidth: '500px',
    maxHeight: '675px',
    margin: '0 auto',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '30px',
    bottom: '30px',
    overflow: 'scroll'
  },
  icon: {
    float: 'right',
    marginTop: '-2px',
    marginRight: '6px',
  }
}

export default class CreateSchedules extends React.Component {
  render(){
    const showError = this.props.showError ? <ErrorMessage toggleErrorMessage={this.props.toggleErrorMessage} showError={this.props.showError} /> : <div></div>
    let workerHolder = [];
    for(var i = 1; i <= 3; i++){
      workerHolder.push(
        <AddWorkers worker={this.props.newWorkers[i-1].name} phone={this.props.newWorkers[i-1].phone} handleNewWorkers={this.props.handleNewWorkers} handlePhones={this.props.handlePhones} key={i} id={i}/>
      )
    }
    return (
      <div style={styles.formBox}>
        <Row>
          <a href="#" onClick={this.props.toggleCreatable}><Glyphicon style={styles.icon} glyph="remove" /></a>
          <Col xs={12}>

            <h3>Create New Schedule</h3>

              <AddDate date={this.props.date} handleDate={this.props.handleDate} />
              {workerHolder}
              <AddMessage handleMessage={this.props.handleMessage} message={this.props.message}/>
              <Button style={styles.button} bsStyle="warning" onClick={this.props.postSchedule}>Post Schedule</Button>
              {showError}
          </Col>
        </Row>

      </div>
    )
  }
}
