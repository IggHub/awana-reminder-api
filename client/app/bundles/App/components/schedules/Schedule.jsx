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
      worker: '',
      date: ''
    };
    this.postSchedule = this.postSchedule.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
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
  };
  postSchedule(date, message, workers){
    let tempNewWorkers = this.state.workers.slice();

  };

  handleMessage(e){
    this.setState({message: e.target.value})
  };
  componentDidMount(){
    this.getSchedules();
    this.getWorkersInfo();
  }

  render(){
    return (
      <div>
        <h2>Hello from Schedule!</h2>
        <DisplaySchedules
          workers={this.state.workers}
          schedules={this.state.schedules} />
        <CreateSchedules
          handleMessage={this.handleMessage} />

        <button onClick={() => console.log(this.state.message)}>Message</button>
      </div>
    )
  }
}

export default Schedule;
