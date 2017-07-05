import React from 'react';
import DisplayScores from './DisplayScores';

import Client from './utils/Client';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      scores: []
    };
    //this.getStudents = this.getStudents.bind(this);
  };
  getStudents(){
    Client.getStudents((students) => {
      this.setState({students})
    })
  };
  getScores(){
    Client.getScores((scores) => {
      this.setState({scores})
    })
  };
  
  componentDidMount(){
    this.getStudents();
    this.getScores();
  };
  render(){
    return (
      <div>
        <DisplayScores students={this.state.students} scores={this.state.scores} />
        <button onClick={() => console.log(this.state.scores)}>Get Scores</button>
      </div>
    )
  }
}
