import React from 'react';
import DisplayScores from './components/DisplayScores';

import Client from './utils/Client';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      scores: [],
      studentsScores: {}
    };
    this.rearrangeStudentsWithScores = this.rearrangeStudentsWithScores.bind(this);
  };
  getScores(){
    Client.getScores((scores) => {
      this.setState({scores})
    }).then(this.getStudents())
  };
  getStudents(){
    Client.getStudents((students) => {
      this.setState({students});
      this.rearrangeStudentsWithScores()
    })
  };
  rearrangeStudentsWithScores(){
    if (this.state.students.length > 0){
      const studentsScores = {};
      const students = this.state.students;
      const scores = this.state.scores;
      students.forEach(function(student){
        var studentScoresArray = scores.filter(function(score){
          return score.student_id === student.id
        })
        studentsScores[student.name] = studentScoresArray;
      })
      this.setState({studentsScores});
    }
  }

  componentDidMount(){
    this.getScores();

  };
  render(){
    return (
      <div>
        <DisplayScores studentsScores={this.state.studentsScores} students={this.state.students} scores={this.state.scores} />
        <button onClick={this.rearrangeStudentsWithScores}>getStudentsWithScores</button>
        <button onClick={() => console.log(this.state.studentsScores)}>Students Scores</button>
      </div>
    )
  }
}
