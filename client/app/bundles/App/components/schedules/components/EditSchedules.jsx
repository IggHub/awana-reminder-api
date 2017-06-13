import React from 'react';

import EditWorkers from './EditWorkers';
import EditDate from './EditDate';
import EditMessage from './EditMessage';

export default class EditSchedules extends React.Component {
  render(){
    let workerHolder = [];
    for(var i = 1; i <= this.props.editWorkers.length; i++){
      workerHolder.push(
        <EditWorkers
            handleEditWorkers={this.props.handleEditWorkers}
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
        <h2>Hello Edit Schedules!</h2>
        <EditDate handleDate={this.props.handleDate} editDate={this.props.editDate}/>
        {workerHolder}
        <EditMessage handleMessage={this.props.handleMessage} editMessage={this.props.editMessage} />
        <button>Update Schedule</button>
        <hr />
      </div>
    )
  }
}
