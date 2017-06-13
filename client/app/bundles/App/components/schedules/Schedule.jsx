import React from 'react';
import Client from '../schedules/utils/Client';
import DisplaySchedules from '../schedules/components/DisplaySchedules';
import CreateSchedules from '../schedules/components/CreateSchedules';
import EditSchedules from '../schedules/components/EditSchedules';

class Schedule extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      schedule: '',
      schedules: [],
      worker: '',
      workers: [],
      newWorkers: [{name: '', phone: ''},{name: '', phone: ''},{name: '', phone: ''}],
      finalNewWorkers: [],
      workerTemp1: '',
      workerTemp2: '',
      workerTemp3: '',
      phone: '',
      phoneTemp1: '',
      phoneTemp2: '',
      phoneTemp3: '',
      date: '',
      editable: false,
      creatable: true,
      editWorkers: [],
      editDate: '',
      editMessage: ''
    };
    this.postSchedule = this.postSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleNewWorkers = this.handleNewWorkers.bind(this);
    this.handleEditWorkers = this.handleEditWorkers.bind(this);
    this.handlePhones = this.handlePhones.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.clearField = this.clearField.bind(this);
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
  postSchedule(){
    console.log("starting postSchedule...");
    let tempNewWorkers = this.state.newWorkers.slice();
    let noBlankTempNewWorkers = tempNewWorkers.filter((el) => {
      return el.name.length > 0
    });
    this.setState({finalNewWorkers: noBlankTempNewWorkers}, () => console.log(this.state.finalNewWorkers));
    Client.postSchedule(this.state.date, this.state.message, noBlankTempNewWorkers, (schedule) => {
      this.setState({
        schedules: this.state.schedules.concat([schedule]),
        workers: this.state.workers.concat(noBlankTempNewWorkers),
        date: '',
        message: '',
        newWorkers: [{name: '', phone: ''},{name: '', phone: ''},{name: '', phone: ''}]
      });
      this.getWorkersInfo();
    });
  };

  clearField(){

    console.log(document.getElementById("addDate"));
    document.getElementById("addMessage").value="";
  };

  handleMessage(e){
    this.setState({message: e.target.value, editMessage: e.target.value})
  };

  handleDate(date){
    this.setState({date: date._d, editDate: date._d})
  };

  handleNewWorkers(e, id){
    let workersArray = this.state.newWorkers.slice();
    if(id === 1){
      workersArray = [{name: e.target.value, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({workerTemp1: e.target.value});
    } else if (id === 2) {
      workersArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: e.target.value, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({workerTemp2: e.target.value});
    } else if (id === 3) {
      workersArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: e.target.value, phone: this.state.phoneTemp3}];
      this.setState({workerTemp3: e.target.value});
    };
    this.setState({newWorkers: workersArray, editWorkers: workersArray});
  };

  handleEditWorkers(e, id){
    let workersArray = this.state.editWorkers.slice();
    if(id === 1){
      workersArray = [{name: e.target.value, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({workerTemp1: e.target.value});
    } else if (id === 2) {
      workersArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: e.target.value, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({workerTemp2: e.target.value});
    } else if (id === 3) {
      workersArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: e.target.value, phone: this.state.phoneTemp3}];
      this.setState({workerTemp3: e.target.value});
    };
    this.setState({newWorkers: workersArray, editWorkers: workersArray});
  }

  handlePhones(e, id){
    let phonesArray = this.state.newWorkers.slice();
    if(id === 1){
      phonesArray = [{name: this.state.workerTemp1, phone: e.target.value}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({phoneTemp1: e.target.value});
    } else if (id === 2) {
      phonesArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: e.target.value}, {name: this.state.workerTemp3, phone: this.state.phoneTemp3}];
      this.setState({phoneTemp2: e.target.value});
    } else if (id === 3) {
      phonesArray = [{name: this.state.workerTemp1, phone: this.state.phoneTemp1}, {name: this.state.workerTemp2, phone: this.state.phoneTemp2}, {name: this.state.workerTemp3, phone: e.target.value}];
      this.setState({phoneTemp3: e.target.value});
    };
    this.setState({newWorkers: phonesArray});
  };

  handleEdit(scheduleId){
    let editWorkersArray = this.state.workers.filter(function(worker){
      return worker.schedule_id === scheduleId
    });
    let editMessage = this.state.schedules.find((el) => el.id === scheduleId).message;
    let editDate = this.state.schedules.find((el) => el.id === scheduleId).date;
    this.setState({
      editable: !this.state.editable,
      creatable: !this.state.creatable,
      editWorkers: editWorkersArray,
      editMessage: editMessage,
      editDate: editDate
    });

  };

  deleteSchedule(scheduleId){
    Client.deleteSchedule(scheduleId, () => {
      this.getSchedules();
    })
  }
  componentDidMount(){
    this.getSchedules();
    this.getWorkersInfo();
  }

  render(){
    const editSchedule = this.state.editable ? <EditSchedules
                                                      handleMessage={this.handleMessage}
                                                      handleDate={this.handleDate}
                                                      handleEditWorkers={this.handleEditWorkers}
                                                      handlePhones={this.handlePhones}
                                                      handleEdit={this.handleEdit}
                                                      editDate={this.state.editDate}
                                                      editWorkers={this.state.editWorkers}
                                                      editMessage={this.state.editMessage}/> : <div></div>
                                                    
    const createSchedule = this.state.creatable ? <CreateSchedules
                                                      handleMessage={this.handleMessage}
                                                      handleDate={this.handleDate}
                                                      handleNewWorkers={this.handleNewWorkers}
                                                      handlePhones={this.handlePhones}
                                                      postSchedule={this.postSchedule}
                                                      date={this.state.date}
                                                      message={this.state.message}
                                                      newWorkers={this.state.newWorkers}/> : <div></div>
    return (
      <div>
        <h2>Hello from Schedule!</h2>
        <DisplaySchedules
          workers={this.state.workers}
          schedules={this.state.schedules}
          deleteSchedule={this.deleteSchedule}
          handleEdit={this.handleEdit} />

        {editSchedule}
        {createSchedule}

        <button onClick={() => console.log(this.state.date)}>View Date</button>
        <button onClick={() => console.log(this.state.workers)}>View Workers</button>
        <button onClick={() => console.log(this.state.newWorkers)}>View New Workers</button>
        <button onClick={() => console.log(this.state.editWorkers)}>View Edit Workers</button>
        <button onClick={() => console.log(this.state.message)}>View Message</button>
        <button onClick={() => console.log(this.state.schedules)}>View Schedules</button>
      </div>
    )
  }
}

export default Schedule;
