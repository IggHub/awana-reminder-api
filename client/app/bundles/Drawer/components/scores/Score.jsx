import React from 'react';
import DisplayScores from './components/DisplayScores';

import Client from './utils/Client';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      scores: [],
      studentsScores: [],
      test: "test"
    };
    this.rearrangeStudentsWithScores = this.rearrangeStudentsWithScores.bind(this);
    this.handleStudentScoresTable = this.handleStudentScoresTable.bind(this);
  };
  getStudentsAndScores(){
    Client.getStudentsAndScores().then(([students, scores]) => {
      this.setState({
        students,
        scores
      }, () => this.rearrangeStudentsWithScores())
    })
  }
  rearrangeStudentsWithScores(){
    if (this.state.students.length > 0){
      const studentsScores = [];
      const students = this.state.students;
      const scores = this.state.scores;

      students.forEach(function(student){
        const studentScoresArray = scores.filter(function(score){
          return score.student_id === student.id
        })
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
    console.log(item);
    var scores = this.state.scores.slice();
    var newScores = scores.map(function(score) {
      for (var key in score){

        if(key == item.name && score.id == item.id) {
          score[key] = item.value;
        }
      };
      return score;
    });
    this.setState({scores: newScores});
    
  };

  componentDidMount(){
    this.getStudentsAndScores();
  };
  handleTest(e){
    this.setState({test: e.target.value})
  }
  render(){
    return (
      <div>
        <input type="text" onChange={this.handleTest.bind(this)} value={this.state.test} />
        <DisplayScores onStudentScoresTableUpdate={this.handleStudentScoresTable} studentsScores={this.state.studentsScores} students={this.state.students} scores={this.state.scores} />
      </div>
    )
  }
}
