import React from 'react';
import Client from './utils/Client';
import DisplaySchedules from '../schedules/components/DisplaySchedules';
import CreateSchedules from '../schedules/components/CreateSchedules';
import EditSchedules from '../schedules/components/EditSchedules';

const height= '400px';
const width = '400px';

const styles = {
  schedulerButton: {
    position: 'fixed',
    right: '30px',
    bottom: '30px',
    height: '57px',
    width: '57px',
    borderRadius: '100%',
    background: '#FFBE00',
    cursor: 'pointer',
  },
  boxOverall:{
    position: 'fixed',
    right: '100px',
    bottom: '57px',
    width: width,
    height: height,
    borderRadius: '10px',
    background: '#ffffff',
    overflow: 'scroll'
  },
  boxHeader: {
    position: 'relative',
    right: '0px',
    top: '0px',
    width: width,
    height: '35px',
    borderRadius: '10px 10px 0% 0%',
    background: '#FFBE00',
  }
}

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
      phone: '',
      date: '',
      editable: false,
      creatable: false,
      editWorkers: [],
      editDate: '',
      editMessage: '',
      currentScheduleId: '',
      showError: false,
      showAddSchedule: false,
    };
    this.postMessage = this.postMessage.bind(this);
    this.postSchedule = this.postSchedule.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleNewWorkers = this.handleNewWorkers.bind(this);
    this.handleEditWorkers = this.handleEditWorkers.bind(this);
    this.handlePhones = this.handlePhones.bind(this);
    this.handleEditPhones = this.handleEditPhones.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleShowAddSchedule = this.toggleShowAddSchedule.bind(this);
    this.toggleErrorMessage = this.toggleErrorMessage.bind(this);
    this.toggleCreatable = this.toggleCreatable.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
  };
  toggleShowAddSchedule(){
    this.setState({showAddSchedule: !this.state.showAddSchedule})
  };
  toggleErrorMessage(){
    this.setState({showError: false})
  };
  toggleCreatable(){
    //console.log("Hello creatable!");
    this.setState({creatable: !this.state.creatable, editable: false})
  };
  toggleEditable(){
    this.setState({editable: !this.state.editable, creatable: false })
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
    let tempNewWorkers = this.state.newWorkers.slice();
    let noBlankTempNewWorkers = tempNewWorkers.filter((el) => {
      return el.name.length > 0 && el.phone.length > 0
    });
    //this.setState({finalNewWorkers: noBlankTempNewWorkers}, () => console.log(this.state.finalNewWorkers));
    //console.log("no blank temp new workers: " + noBlankTempNewWorkers)
    // this.state.date and this.state.message and noBlankTempNewWorkers all need to be non-empty
    if (this.state.date && this.state.message && (noBlankTempNewWorkers.length !== 0)){
      Client.postSchedule(this.props.currentUserId, this.state.date, this.state.message, noBlankTempNewWorkers, (schedule) => {
        this.setState({
          schedules: this.state.schedules.concat([schedule]),
          workers: this.state.workers.concat(noBlankTempNewWorkers),
          date: '',
          message: '',
          newWorkers: [{name: '', phone: ''},{name: '', phone: ''},{name: '', phone: ''}],
          showError: false
        });
        this.getWorkersInfo();
      });
    } else {
      console.log("Don't leave it blank!");
      console.log('noBlankTempNewWorkers:');
      console.log(noBlankTempNewWorkers);
      this.setState({showError: true})
    }
  };

  updateSchedule(){
    let currentSchedule = this.state.schedules.find((el) => el.id === this.state.currentScheduleId);
    Client.updateSchedule(this.state.currentScheduleId, this.props.currentUserId, this.state.editDate, this.state.editMessage, this.state.editWorkers, () => {
      this.getSchedules();
      this.getWorkersInfo();
    });
  };

  handleMessage(e){
    this.setState({message: e.target.value, editMessage: e.target.value})
  };

  postMessage(){
    Client.postMessage(this.state.message, this.state.newWorkers, this.state.date);
  };

  handleDate(date){
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinutePlusOne = today.getMinutes() + 1;
    let dateClone = date;
    let aMinuteFromNow = dateClone.set({'hour': currentHour, 'minute': currentMinutePlusOne });
    this.setState({date: aMinuteFromNow._d, editDate: aMinuteFromNow._d});

  };

  handleNewWorkers(e, id){
    let workersArray = this.state.newWorkers.slice();
    workersArray[id-1]["name"] = e.target.value;
    this.setState({newWorkers: workersArray, editWorkers: workersArray});
  };

  handleEditWorkers(e, id){
    let workersArray = this.state.editWorkers.slice();
    workersArray[id-1]["name"] = e.target.value;
    this.setState({editWorkers: workersArray});
  };

  handlePhones(e, id){
    let phonesArray = this.state.newWorkers.slice();
    phonesArray[id-1]["phone"] = e.target.value;
    this.setState({newWorkers: phonesArray, editWorkers: phonesArray});
  };

  handleEditPhones(e, id){
    let phonesArray = this.state.editWorkers.slice();
    phonesArray[id-1]["phone"] = e.target.value;
    this.setState({newWorkers: phonesArray, editWorkers: phonesArray});
  };

  handleEdit(scheduleId){
    let editWorkersArray = this.state.workers.filter(function(worker){
      return worker.schedule_id === scheduleId
    });
    let editMessage = this.state.schedules.find((el) => el.id === scheduleId).message;
    let editDate = this.state.schedules.find((el) => el.id === scheduleId).date;
    this.setState({
      editable: !this.state.editable,
      creatable: false,
      currentScheduleId: scheduleId,
      editWorkers: editWorkersArray,
      editMessage: editMessage,
      editDate: editDate
    });
  };

  deleteSchedule(scheduleId){
    Client.deleteSchedule(scheduleId, () => {
      this.setState({currentScheduleId: ''})
      this.getSchedules();
    })
  }
  componentDidMount(){
    this.getSchedules();
    this.getWorkersInfo();
  }

  render(){
    const showAddSchedule = this.state.showAddSchedule ? <div style={styles.boxOverall}><div style={styles.boxHeader}></div></div> : <div></div>
    const editSchedule = this.state.editable ? <EditSchedules
                                                      handleMessage={this.handleMessage}
                                                      handleDate={this.handleDate}
                                                      handleEditWorkers={this.handleEditWorkers}
                                                      handlePhones={this.handlePhones}
                                                      handleEditPhones={this.handleEditPhones}
                                                      handleEdit={this.handleEdit}
                                                      editDate={this.state.editDate}
                                                      editWorkers={this.state.editWorkers}
                                                      editMessage={this.state.editMessage}
                                                      updateSchedule={this.updateSchedule}
                                                      toggleEditable={this.toggleEditable}
                                                      /> : <div></div>

    const createSchedule = this.state.creatable ? <CreateSchedules
                                                      handleMessage={this.handleMessage}
                                                      handleDate={this.handleDate}
                                                      handleNewWorkers={this.handleNewWorkers}
                                                      handlePhones={this.handlePhones}
                                                      postSchedule={this.postSchedule}
                                                      date={this.state.date}
                                                      message={this.state.message}
                                                      newWorkers={this.state.newWorkers}
                                                      showError={this.state.showError}
                                                      toggleErrorMessage={this.toggleErrorMessage}
                                                      toggleCreatable={this.toggleCreatable} /> : <div></div>
    return (
      <div>
        <DisplaySchedules
          workers={this.state.workers}
          schedules={this.state.schedules}
          deleteSchedule={this.deleteSchedule}
          handleEdit={this.handleEdit}
          currentUserId={this.props.currentUserId}
          toggleCreatable={this.toggleCreatable} />

        {editSchedule}
        {createSchedule}
        <div onClick={this.toggleShowAddSchedule} style={styles.schedulerButton} />
        {showAddSchedule}
        {/*}
        <button onClick={() => console.log(this.state.date)}>View Date</button>
        <button onClick={() => console.log(this.state.editDate)}>View Edit Date</button>
        <button onClick={() => console.log(this.state.workers)}>View Workers</button>
        <button onClick={() => console.log(this.state.newWorkers)}>View New Workers</button>
        <button onClick={() => console.log(this.state.editWorkers)}>View Edit Workers</button>
        <button onClick={() => console.log(this.state.message)}>View Message</button>
        <button onClick={() => console.log(this.state.editMessage)}>View Edit Message</button>
        <button onClick={() => console.log(this.state.schedules)}>View Schedules</button>
        {*/}
        <button onClick={() => console.log(this.state.newWorkers)}>View New Workers</button>
        <button onClick={() => console.log(this.state.message)}>View Message</button>
        <button onClick={() => console.log(this.state.schedule)}>View Schedule</button>
        <button onClick={this.postMessage}>Post Message</button>

      </div>
    )
  }
}

export default Schedule;
