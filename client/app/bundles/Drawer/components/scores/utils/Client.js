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

function getStudentsAndScores(cbStudent, cbScores, cbStudentsScores){
  getStudents(cbStudent).then(getScores(cbScores)).then(cbStudentsScores);
}

const Client = {
  getStudents,
  getScores,
  getStudentsAndScores
}

export default Client;
