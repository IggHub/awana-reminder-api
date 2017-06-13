import React from 'react';

import AddDate from './AddDate';
import AddWorkers from './AddWorkers';
import AddMessage from './AddMessage';

export default class CreateSchedules extends React.Component {
  render(){
    let workerHolder = [];
    for(var i = 1; i <= 3; i++){
      workerHolder.push(
        <AddWorkers newWorkers={this.props.newWorkers} handleNewWorkers={this.props.handleNewWorkers} handlePhones={this.props.handlePhones} key={i} id={i}/>
      )
    }
    return (
      <div>
        <h2>Hello create schedules!</h2>
          <AddDate date={this.props.date} handleDate={this.props.handleDate} />
          {workerHolder}
          <AddMessage handleMessage={this.props.handleMessage} message={this.props.message}/>
          <button onClick={this.props.postSchedule}>Post Schedule</button>
        <hr />
      </div>
    )
  }
}
