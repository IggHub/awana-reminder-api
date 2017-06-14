import PhoneHelpers from './PhoneHelpers';

function getSchedules(cb){
  return fetch(`api/schedules`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
    .then(cb)
};

function getWorkersInfo(cb){
  return fetch(`api/workers`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
    .then(cb)
};

function postSchedule(date, message, workersArray, cb) {
  return fetch(`api/schedules`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: date,
      message: message,
      user_id: 1,
      worker_info: workersArray
    })
  }).then((response) => response.json())
    .then(cb);
};

function updateSchedule(scheduleId, date, message, workersArray, cb){
  return fetch(`api/schedules/${scheduleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: date,
      message: message,
      user_id: 1,
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
  getSchedules,
  getWorkersInfo,
  postSchedule,
  updateSchedule,
  deleteSchedule
}
export default Client;
