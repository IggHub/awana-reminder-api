import PhoneHelpers from './PhoneHelpers';

function getSchedules(){
  return fetch(`api/schedules`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getWorkersInfo(){
  return fetch(`api/workers`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getSchedulesAndWorkers(){
  return Promise.all([getSchedules(), getWorkersInfo()])
}

function postSchedule(currentUserId, date, message, workersArray, cb) {
  return fetch(`api/schedules`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: date,
      message: message,
      user_id: parseInt(currentUserId),
      worker_info: workersArray
    })
  }).then((response) => response.json())
    .then(cb);
};

function postMessage(message, workers, messageDateTime){
  let phoneArray = workers.map((worker) => {
    return PhoneHelpers.condensePhone(worker.phone)
  }).filter((el) => {return el !== ""});

  return fetch('text_it', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      phones: phoneArray,
      message_datetime: messageDateTime.getTime()
    })
  });
  console.log(messageDateTime.getTime());
};

function updateSchedule(scheduleId, currentUserId, date, message, workersArray, cb){
  return fetch(`api/schedules/${scheduleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: date,
      message: message,
      user_id: parseInt(currentUserId),
      worker_info: workersArray
    })
  }).then((response) => response.json())
    .then(cb);
}

function deleteSchedule(scheduleId, cb){
  return fetch(`api/schedules/${scheduleId}`, {
    method: 'DELETE'
  }).then(cb);
};

const Client = {
  getSchedulesAndWorkers,
  postSchedule,
  postMessage,
  updateSchedule,
  deleteSchedule
}
export default Client;
