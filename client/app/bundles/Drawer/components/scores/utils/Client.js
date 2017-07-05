function getStudents(cb){
  return fetch(`api/students`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
    .then(cb)
};

function getScores(cb){
  return fetch(`api/scores`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
    .then(cb)
};

const Client = {
  getStudents,
  getScores
}

export default Client;
