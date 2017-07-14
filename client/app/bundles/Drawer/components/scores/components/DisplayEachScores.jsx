import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ScoreCharts from './ScoreCharts';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

function uniqueFilter(value, index, self){
  return self.indexOf(value) === index;
};

let average = (array) => array.reduce((a, b) => a + b) / array.length;

class EditableCell extends React.Component{
  render(){
    return (
      <td>
        <input
          onBlur={(id, point)=>{this.props.updateScores(this.props.cellData.id, this.props.cellData.value)}} onChange={this.props.onStudentScoresTableUpdate}
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onFocus={() => console.log(this.props.cellData.id)}
          />
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
          <EditableCell updateScores={this.props.updateScores} cellData={{
              type: "point",
              id: Object.values(this.props.student)[0][i]["id"],
              value: Object.values(this.props.student)[0][i]["point"]
            }} onStudentScoresTableUpdate={onStudentScoresTableUpdate} />
        </tr>
      )
    }

    return (
      <div>
        <Row>
          <Col xs={12} sm={6} lg={3}>
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
        </Row>
        <Row>
          <ScoreCharts
            scoreData={Object.values(this.props.student)[0]}
            averageScores={this.props.averageScores}
            showAverage={this.props.showAverage}
            handleAverage={this.props.handleAverage}
            />
          <button onClick={() => {console.log(this.props.averageScores)}}>Average scores</button>
        </Row>
      </div>
    )
  }
}


export default class DisplayEachScores extends React.Component {
  render(){
    var weeks;
    var scoreHolder = [];
    var averageScores = [];

    const bsTable = [];

    if(this.props.studentsScores.length > 0){
      const scores = this.props.scores;
      weeks = scores.map((score) => {return score.week}).filter(uniqueFilter);

      weeks.forEach((week, index) => {
        scoreHolder.push(scores.filter((score) => {
          return score.week === week
          })
        )
      });

      scoreHolder.forEach((weekly, index) => {
        const scoreArrayHolder = [];
        const scoreObjectHolder = {};
        weekly.forEach((eachStudent, index) => {
          scoreArrayHolder.push(
            Number(eachStudent.point)
          )
        });

        averageScores.push(
          {
            averagePoint: average(scoreArrayHolder),
            week: weeks[index]
          }
        );
      })
      this.props.studentsScores.forEach((student, index) => {
        bsTable.push(
          <ScoresTable
            updateScores={this.props.updateScores}
            onStudentScoresTableUpdate={this.props.onStudentScoresTableUpdate}
            key={index} student={student}
            index={index}
            averageScores={averageScores}
            showAverage={this.props.showAverage}
            handleAverage={this.props.handleAverage}
            />
        )
      })
    }
    return (
      <div>
        <Grid>
          {bsTable}
        </Grid>
      </div>
    )
  }
}
