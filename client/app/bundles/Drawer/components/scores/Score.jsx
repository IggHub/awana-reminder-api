import React from 'react';
import DisplayEachScores from './components/DisplayEachScores';
import DisplayAllScores from './components/DisplayAllScores';

import Client from './utils/Client';

function compare(a,b){
  if(a.created_at < b.created_at){
    return -1;
  } else if (a.created_at > b.created_at){
    return 1;
  } else {
    return 0;
  }
}

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      scores: [],
      studentsScores: [],
      displayAverageChart: false
    };
    this.rearrangeStudentsWithScores = this.rearrangeStudentsWithScores.bind(this);
    this.handleStudentScoresTable = this.handleStudentScoresTable.bind(this);
    this.updateScores = this.updateScores.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleDisplayAverage = this.toggleDisplayAverage.bind(this);
  };

  toggleDisplayAverage(e){
    this.setState({displayAverageChart: !this.state.displayAverageChart}, () => console.log(this.state.displayAverageChart))
  }

  getStudentsAndScores(){
    Client.getStudentsAndScores().then(([students, scores]) => {
      this.setState({
        students,
        scores
      }, () => this.rearrangeStudentsWithScores())
    })
  };

  rearrangeStudentsWithScores(){
    if (this.state.students.length > 0){
      const studentsScores = [];
      const students = this.state.students;
      const scores = this.state.scores;

      students.forEach(function(student){
        const studentScoresArray = scores.filter(function(score){
          return score.student_id === student.id
        })
        studentScoresArray.sort(compare);
        const studentsObject = {};
        studentsObject[student.name] = studentScoresArray;
        studentsObject["id"] = student.id
        studentsScores.push(studentsObject);
      })
      this.setState({studentsScores});
    }
  };

  handleStudentScoresTable(e){
    var item = {
      id: e.target.id,
      name: e.target.name,
      value: e.target.value
    };
    var scores = this.state.scores.slice();
    var newScores = scores.map(function(score) {
      for (var key in score){
        if(key == item.name && score.id == item.id) {
          score[key] = item.value;
        }
      };
      return score;
    });
    this.setState({scores: newScores}, () => this.rearrangeStudentsWithScores());
  };

  handleAdd(){
    var id = this.state.scores[this.state.scores.length - 1].id + 1;
    var scores = this.state.scores.slice();
    var students = this.state.students.slice();;
    const maxWeek = Math.max(...this.state.scores.map((score) => {return score.week})) + 1;
    students.forEach((student, index) => {
      scores.push(
        {
          completed_at: "",
          point: "",
          student_id: student.id,
          week: maxWeek,
          id: id + index
        }
      );
    })
    this.setState({scores}, () => this.rearrangeStudentsWithScores())
  }

  updateScores(id, point){
    var scores = this.state.scores.slice();
    Client.updateScores(id, point);
  };

  componentDidMount(){
    this.getStudentsAndScores();
  };

  render(){
    return (
      <div>
        {/*}<DisplayAllScores onStudentScoresTableUpdate={this.handleStudentScoresTable} studentsScores={this.state.studentsScores} />{*/}
        <button onClick={this.handleAdd}>Add</button>
        <DisplayEachScores
          updateScores={this.updateScores}
          onStudentScoresTableUpdate={this.handleStudentScoresTable} studentsScores={this.state.studentsScores}
          scores={this.state.scores}
          students={this.state.students}
          displayAverageChart={this.state.displayAverageChart}
          handleAverage={this.handleAverage}
          />
        <button onClick={() => console.log(this.state.scores)}>Scores</button>
        <button onClick={() => console.log(Math.max(...this.state.scores.map((score) => {return score.week})) + 1)}>Max week</button>
        <button onClick={() => console.log(this.state.students)}>Students</button>
        <button onClick={() => console.log(this.state.studentsScores)}>Students n Scores</button>
        <button onClick={this.updateScores}>Update Scores</button>
        <button onClick={this.handleAverage}>Switch Charts</button>
        <button onClick={() => console.log(this.state.displayAverageChart)}>Display average chart</button>
        <button onClick={this.toggleDisplayAverage}>Toggle display average</button>
      </div>
    )
  }
}
