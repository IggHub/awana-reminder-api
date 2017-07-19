import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ScoreCharts from './ScoreCharts';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

const styles={
  card: {
    border: "1px solid black",
    padding: "15px",
    margin: "15px 15px 0px 15px",
    height: "300px",
    maxHeight: "300px",
    width: "100%",
    overflow: "auto"
  },
  chartButton: {
    position: "relative",
    width: "100%",
    height: "50px",
    margin: "0px 15px 15px 15px",
    border: "1px solid black",
    cursor: "pointer",
    textAlign: "center",
    verticalAlign: "middle"
  }
};

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

    const cumulativeScores = Object.values(this.props.student)[0];
    var cumulativePointHolder = 0;
    cumulativeScores.forEach((eachWeek, index) => {
      cumulativePointHolder = cumulativePointHolder + Number(eachWeek["point"]);
      eachWeek["cumulativePoint"] = cumulativePointHolder;
      eachWeek["winPoint"] = 50;
    })

    const weeks = this.props.weeks.slice();
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
    const revealCharts = (this.props.shouldDisplayChart === true) ? <ScoreCharts
                                                                      scoreData={Object.values(this.props.student)[0]}
                                                                      averageScores={this.props.averageScores}
                                                                      cumulativeScores={cumulativeScores}
                                                                      index={this.props.index}
                                                                      selectedChartId={this.props.selectedChartId}
                                                                      toggleDisplayChart={this.props.toggleDisplayChart} /> : <div></div>
    return (
      <Col xs={12} sm={6} lg={3}>
        <div style={styles.card}>
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
        </div>
        <div style={styles.chartButton} onClick={(id) => this.props.toggleDisplayChart(this.props.index)}>
          Display Chart
        </div>
        <Row>

          {revealCharts}

        </Row>
      </Col>
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
      const scores = this.props.scores.slice();

      weeks = scores.map((score) => {return score.week}).filter(uniqueFilter);
      //weeks = [1,2,3,4,5,6,7,8]

      weeks.forEach((week, index) => {
        scoreHolder.push(scores.filter((score) => {
          return score.week === week
          })
        )
      });

      /*pushing averageScores*/
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
      /* end averageScores*/

      this.props.studentsScores.forEach((student, index) => {
        bsTable.push(
          <ScoresTable
            updateScores={this.props.updateScores}
            onStudentScoresTableUpdate={this.props.onStudentScoresTableUpdate}
            key={index}
            student={student}
            index={index}
            averageScores={averageScores}
            weeks={weeks}
            shouldDisplayChart={this.props.shouldDisplayChart}
            toggleDisplayChart={this.props.toggleDisplayChart}
            selectedChartId={this.props.selectedChartId}
            />
        )
      })
    }

    return (
      <div>
        <Grid>
          <Row>
            {bsTable}
          </Row>
        </Grid>
      </div>
    )
  }
}
