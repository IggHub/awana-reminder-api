import React from 'react';

class EditableCell extends React.Component{
  render(){
    return (
      <td>
        <input onChange={this.props.onStudentScoresTableUpdate} type="text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value}/>
      </td>
    )
  }
}

class ScoresBody extends React.Component {
  render(){
    var onStudentScoresTableUpdate = this.props.onStudentScoresTableUpdate;
    const studentScores = [];
    for(var i = 0; i <= Object.values(this.props.student)[0].length - 1; i++){
      studentScores.push(
        <tr key={i}>
          <td>{Object.values(this.props.student)[0][i]["week"]}</td>
          <EditableCell cellData={{
              type: "point",
              id: Object.values(this.props.student)[0][i]["id"],
              value: Object.values(this.props.student)[0][i]["point"]
            }} onStudentScoresTableUpdate={onStudentScoresTableUpdate} />
        </tr>
      )
    }

    return (
      <tr>
        {studentScores}
      </tr>
    )
  }
}

class ScoresHead extends React.Component {
  render(){
    const studentName= Object.keys(this.props.student)[0];
    return (
      <th>{studentName}</th>
    )
  }
}

export default class DisplayEachScores extends React.Component {
  render(){
    const bsHead = [];
    const bsBody = [];
    const iCounter = 0;
    const jCounter = 1;
    if(this.props.studentsScores.length > 0){
      this.props.studentsScores.forEach((student, i) => {
        if(Object.keys(student).length > 0){
          bsHead.push(
            <ScoresHead key={i} student={student} />
          )
          //console.log(Object.values(student)[0]); //score object
          Object.values(student)[0].forEach((score, j) => {
            bsBody.push(
              /*how do I push nth element only? How do I organize it?*/
            )
          })
        }
      })
    }

    return (
      <div>

        <table>
          <thead>
            <tr>
              <th>Week #</th>
              {bsHead}
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <button onClick={() => console.log(this.props.studentsScores)}>Students Scores</button>
      </div>
    )
  }
}
