import React from 'react';
import {Table} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../scores/stylesheets/react-bootstrap-table-all.min.css';


class EditableCell extends React.Component{
  render(){
    return (
      <td>
        <input onChange={this.props.onStudentScoresTableUpdate} type="text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value}/>
      </td>
    )
  }
}
class ScoresTable extends React.Component {
  render(){
    var onStudentScoresTableUpdate = this.props.onStudentScoresTableUpdate;
    const studentName = <div>{Object.keys(this.props.student)[0]}</div>
    const studentScores = [];
    for(var i = 0; i <= Object.values(this.props.student)[0].length - 1; i++){
      studentScores.push(
        <tr key={i}>
          <EditableCell cellData={{
              type: "week",
              id: Object.values(this.props.student)[0][i]["id"],
              value: Object.values(this.props.student)[0][i]["week"]
            }} onStudentScoresTableUpdate={onStudentScoresTableUpdate} />
          <EditableCell cellData={{
              type: "point",
              id: Object.values(this.props.student)[0][i]["id"],
              value: Object.values(this.props.student)[0][i]["point"]
            }} onStudentScoresTableUpdate={onStudentScoresTableUpdate} />
        </tr>
      )
    }

    return (
      <div>
        {studentName}
        <table>
          <thead>
            <tr>
              <th>Week #</th>
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
          <ScoresTable onStudentScoresTableUpdate={this.props.onStudentScoresTableUpdate} key={index} student={student} index={index}/>
        )
      })
    }
    return (
      <div>
        <button onClick={() => console.log(this.props.students)}>Students</button>
        <button onClick={() => console.log(this.props.scores)}>Scores</button>
        <button onClick={() => console.log(this.props.studentsScores)}>Students Scores</button>
        {bsTable}
      </div>
    )
  }
}
