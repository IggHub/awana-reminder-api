import React from 'react';

import AddDate from './AddDate';
import AddWorkers from './AddWorkers';
import AddMessage from './AddMessage';

export default class CreateSchedules extends React.Component {
  render(){
    let workerHolder = [];
    for(var i = 1; i <= 3; i++){
      workerHolder.push(
        <AddWorkers handleNewWorkers={this.props.handleNewWorkers} handlePhones={this.props.handlePhones} key={i} id={i}/>
      )
    }
    return (
      <div>
        <h2>Hello create schedules!</h2>
        <AddDate handleDate={this.props.handleDate} />
        {workerHolder}
        <AddMessage handleMessage={this.props.handleMessage} />
      </div>
    )
  }
}
