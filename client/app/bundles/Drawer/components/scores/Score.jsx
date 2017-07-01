import React from 'react';
import Client from './utils/Client';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    //this.getStudents = this.getStudents.bind(this);
  };
  getStudents(){
    Client.getStudents((students) => {
      this.setState({students})
    })
  };
  componentDidMount(){
    this.getStudents();
  };
  render(){
    return (
      <div>
        <button onClick={() => console.log(this.state.students)}>Get Students</button>
      </div>
    )
  }
}
