import React from 'react';

import AddDate from './AddDate';
import AddWorkers from './AddWorkers';
import AddMessage from './AddMessage';
import {Row, Col, Button, FormGroup} from 'react-bootstrap';

const styles = {
  verticalLine: {
    borderLeft: "1px solid #D4D4D4"
  },
  button: {
    width: '100%'
  },
  spacer: {
    marginTop: '50px'
  }
}

export default class CreateSchedules extends React.Component {
  render(){
    const showError = this.props.showError ? <div>Error!</div> : <div></div>
    let workerHolder = [];
    for(var i = 1; i <= 3; i++){
      workerHolder.push(
        <AddWorkers worker={this.props.newWorkers[i-1].name} phone={this.props.newWorkers[i-1].phone} handleNewWorkers={this.props.handleNewWorkers} handlePhones={this.props.handlePhones} key={i} id={i}/>
      )
    }
    return (
      <div>
        <Row>
          <h2>Create Schedule</h2>
          <div style={styles.spacer} />
          <Col sm={3} xs={0}></Col>
          <Col sm={9} xs={12} style={styles.verticalLine}>
            <AddDate date={this.props.date} handleDate={this.props.handleDate} />
            {workerHolder}
            <AddMessage handleMessage={this.props.handleMessage} message={this.props.message}/>

            <Button style={styles.button} bsStyle="warning" onClick={this.props.postSchedule}>Post Schedule</Button>
            {showError}
          </Col>
          <hr />
        </Row>
        <div style={styles.spacer} />
      </div>
    )
  }
}
