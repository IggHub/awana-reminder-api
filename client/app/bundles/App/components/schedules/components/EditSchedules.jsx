import React from 'react';

import EditWorkers from './EditWorkers';
import EditDate from './EditDate';
import EditMessage from './EditMessage';

export default class EditSchedules extends React.Component {
  render(){
    let workerHolder = [];
    for(var i = 1; i <= this.props.newWorkers.length; i++){
      workerHolder.push(
        <EditWorkers worker={this.props.newWorkers[i-1].name} phone={this.props.newWorkers[i-1].phone} newWorkers={this.props.newWorkers} handleNewWorkers={this.props.handleNewWorkers} handlePhones={this.props.handlePhones} key={i} id={i} />
      )
    }
    return (
      <div>
        <h2>Hello Edit Schedules!</h2>
        <EditDate handleDate={this.props.handleDate} date={this.props.date}/>
        {workerHolder}
        <EditMessage handleMessage={this.props.handleMessage} message={this.props.message} />
        <button>Update Schedule</button>
        <hr />
      </div>
    )
  }
}
