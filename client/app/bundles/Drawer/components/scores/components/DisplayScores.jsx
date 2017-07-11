import React from 'react';
import {Table} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

class ScoresRow extends React.Component {
  render(){
    return (
      <tr>
        <td>First</td>
        <td>Second</td>
      </tr>
    )
  }
}

class ScoresTable extends React.Component {
  render(){
    const studentName = <div>{Object.keys(this.props.student)[0]}</div>
    console.log("BEGIN");
    console.log(Object.values(this.props.student));
    console.log(Object.values(this.props.student)[0][0]);
    console.log(Object.values(this.props.student)[0][1]);
    console.log(Object.values(this.props.student)[0][2]);
    console.log(Object.values(this.props.student)[0][0]["point"]);
    console.log("END");
    const studentScores = [];
    for(var i = 0; i <= Object.values(this.props.student)[0].length - 1; i++){
      studentScores.push(
        <tr key={i}>
          <td>{Object.values(this.props.student)[0][i]["week"]}</td>
          <td>{Object.values(this.props.student)[0][i]["point"]}</td>
        </tr>
      )
    }

    return (
      <div>
        {studentName}
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {studentScores}
          </tbody>
        </table>
        <hr />
      </div>
    )
  }
}

export default class DisplayScores extends React.Component {
  render(){
    const bsTable = [];
    if(this.props.studentsScores.length > 0){
      this.props.studentsScores.forEach((student, index) => {
        bsTable.push(
          //5 students; 5 scoresTable
          <ScoresTable key={index} student={student} index={index}/>

        )
      })
    }
    return (
      <div>
        {bsTable}

        <button onClick={() => console.log(this.props.students)}>Students</button>
        <button onClick={() => console.log(this.props.scores)}>Scores</button>
        <button onClick={() => console.log(this.props.studentsScores)}>Students Scores</button>
      </div>
    )
  }
}
