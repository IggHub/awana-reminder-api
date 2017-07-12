import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import '../../scores/stylesheets/react-bootstrap-table-all.min.css';


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
    const studentName = <span>{Object.keys(this.props.student)[0]}</span>
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
      <div>
        <Col xs={12} sm={6} lg={3} xl={2}>
          <table>
            <thead>
              <tr>
                <th>Week #</th>
                <th>Points for {studentName}</th>
              </tr>
            </thead>
            <tbody>
              {studentScores}
            </tbody>
          </table>
        </Col>
      </div>
    )
  }
}

export default class DisplayEachScores extends React.Component {
  render(){
    const bsTable = [];
    if(this.props.studentsScores.length > 0){
      this.props.studentsScores.forEach((student, index) => {
        bsTable.push(
          <ScoresTable onStudentScoresTableUpdate={this.props.onStudentScoresTableUpdate} key={index} student={student} index={index}/>
        )
      })
    }
    return (
      <div>
        <Grid>
          <Row>
            {bsTable}
          </Row>
          <p>Sum</p>
        </Grid>
      </div>
    )
  }
}
