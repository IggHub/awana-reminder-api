import React from 'react';
import Client from '../schedules/utils/Client';
import DisplaySchedules from '../schedules/components/DisplaySchedules';
import CreateSchedules from '../schedules/components/CreateSchedules';

class Schedule extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      schedules: [],
      schedule: '',
      workers: [],
      worker: ''
    }
  };
  getSchedules(){
    Client.getSchedules((schedules) => {
      this.setState({schedules})
    })
  };
  getWorkersInfo(){
    Client.getWorkersInfo((workers) => {
      this.setState({workers})
    })
  }
  componentDidMount(){
    this.getSchedules();
    this.getWorkersInfo();
  }

  render(){
    return (
      <div>
        <h2>Hello from Schedule!</h2>
        <DisplaySchedules />
        <CreateSchedules />
        <button onClick={() => console.log(this.state.schedules)}>Schedules</button>
        <button onClick={() => console.log(this.state.workers)}>Workers</button>
      </div>
    )
  }
}

export default Schedule;
