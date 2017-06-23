import React from 'react';
import EditWorkers from './EditWorkers';
import EditDate from './EditDate';
import EditMessage from './EditMessage';
import {Row, Col, Button} from 'react-bootstrap';

const styles = {
  verticalLine: {
    borderLeft: "1px solid #D4D4D4"
  },
  button: {
    width: '100%'
  }
}

export default class EditSchedules extends React.Component {
  render(){
    let workerHolder = [];
    for(var i = 1; i <= this.props.editWorkers.length; i++){
      workerHolder.push(
        <EditWorkers
            handleEditWorkers={this.props.handleEditWorkers}
            handleEditPhones={this.props.handleEditPhones}
            handlePhones={this.props.handlePhones}
            worker={this.props.editWorkers[i-1].name}
            phone={this.props.editWorkers[i-1].phone}
            workers={this.props.editWorkers}
            handleNewWorkers={this.props.handleNewWorkers}
            key={i}
            id={i} />
      )
    }
    return (
      <div>
        <Row>
          <h2>Edit Schedule</h2>
          <Col sm={3} xs={0}></Col>
          <Col sm={9} xs={3} style={styles.verticalLine}>

            <EditDate handleDate={this.props.handleDate} editDate={this.props.editDate}/>
            {workerHolder}
            <EditMessage handleMessage={this.props.handleMessage} editMessage={this.props.editMessage} />
            <Button style={styles.button} bsStyle="warning" onClick={this.props.updateSchedule}>Update Schedule</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
