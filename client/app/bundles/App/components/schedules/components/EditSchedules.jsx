import React from 'react';
import EditWorkers from './EditWorkers';
import EditDate from './EditDate';
import EditMessage from './EditMessage';
import {Row, Col, Button, Glyphicon} from 'react-bootstrap';

const styles = {
  verticalLine: {
    borderLeft: "1px solid #D4D4D4"
  },
  button: {
    width: '100%'
  },
  formBox: {
    background: 'white',
    padding: '20px',
    border: 'none',
    maxWidth: '500px',
    margin: '0 auto',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '50px',
    overflow: 'scroll'
  },
  icon: {
    float: 'right',
    marginTop: '-2px',
    marginRight: '6px',
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
      <div style={styles.formBox}>
        <Row>
          <a href="#" onClick={this.props.toggleEditable}><Glyphicon style={styles.icon} glyph="remove" /></a>
          <Col xs={12}>
            <h3>Edit Schedule</h3>
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
