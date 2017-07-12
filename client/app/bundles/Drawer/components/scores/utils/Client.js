function getStudents(){
  return fetch(`api/students`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getScores(){
  return fetch(`api/scores`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getStudentsAndScores(){
  return Promise.all([getStudents(), getScores()])
};

function updateScores(scoreId, point){
  return fetch(`api/scores/${scoreId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      point: point
    })
  }).then((response) => response.json())
};

/*
function postScores(){
  return fetch('api/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed_at:
      point:
      week:
    })
  })
}
*/

const Client = {
  getStudentsAndScores,
  updateScores
}

export default Client;
