import React from 'react';

import AddDate from './AddDate';
import AddWorkers from './AddWorkers';
import AddMessage from './AddMessage';

export default class CreateSchedules extends React.Component {
  render(){
    return (
      <div>
        <h2>Hello create schedules!</h2>
        <AddDate />
        <AddWorkers />
        <AddMessage handleMessage={this.props.handleMessage} />
      </div>
    )
  }
}
