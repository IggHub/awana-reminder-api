import React from 'react';
import DisplayEachScores from './components/DisplayEachScores';
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
      shouldDisplayChart: false,
      selectedChartId: '',
      filterText: ''
    };
    this.rearrangeStudentsWithScores = this.rearrangeStudentsWithScores.bind(this);
    this.handleStudentScoresTable = this.handleStudentScoresTable.bind(this);
    this.updateScores = this.updateScores.bind(this);
    this.postScores = this.postScores.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDisplayChart = this.toggleDisplayChart.bind(this);
  };

  toggleDisplayChart(id){
    this.setState({
      shouldDisplayChart: !this.state.shouldDisplayChart,
      selectedChartId: id
    }, () => console.log(this.state.shouldDisplayChart))
  };

  handleUserInput(e){
    this.setState({filterText: e.target.value})
  };

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
    var newWeekScoresHolder = [];
    const maxWeek = Math.max(...this.state.scores.map((score) => {return score.week})) + 1;
    students.forEach((student, index) => {
      newWeekScoresHolder.push(
        {
          completed_at: "",
          point: 0,
          student_id: student.id,
          week: maxWeek,
          id: id + index,
        }
      );
    })
    scores = scores.concat(newWeekScoresHolder);
    this.setState({scores}, () => {
      this.rearrangeStudentsWithScores();
      console.log(newWeekScoresHolder); //newWeekScoresHolder array contains all the new data! postScores using newWeekScoresHolder!
      /*add postScores here to post new scores with points 0 */
    })
  }

  handleDelete(){
    var maxWeek = Math.max(...this.state.scores.map((score) => {return score.week}));
    Client.deleteScores(maxWeek).then(this.getStudentsAndScores());
  }

  updateScores(id, point){
    Client.updateScores(id, point);
  };

  postScores(id, point, week, studentId){
    Client.postScores(id, point, week, studentId);
  }

  componentDidMount(){
    this.getStudentsAndScores();
  };

  render(){
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <DisplayEachScores
          updateScores={this.updateScores}
          postScores={this.postScores}
          onStudentScoresTableUpdate={this.handleStudentScoresTable} studentsScores={this.state.studentsScores}
          scores={this.state.scores}
          students={this.state.students}
          toggleDisplayChart={this.toggleDisplayChart}
          shouldDisplayChart={this.state.shouldDisplayChart}
          selectedChartId={this.state.selectedChartId}
          handleUserInput={this.handleUserInput}
          filterText={this.state.filterText}
        />
        <button onClick={() => console.log(this.state.scores)}>Scores</button>
        <button onClick={this.handleDelete}>Delete latest week</button>
      {/*}
        <button onClick={() => console.log(Math.max(...this.state.scores.map((score) => {return score.week})))}>Max week</button>
        <button onClick={() => console.log(this.state.students)}>Students</button>
        <button onClick={() => console.log(this.state.studentsScores)}>Students n Scores</button>
        <button onClick={this.updateScores}>Update Scores</button>
        <button onClick={this.handleAverage}>Switch Charts</button>
        <button onClick={() => console.log(this.state.displayAverageChart)}>Display average chart</button>
        <button onClick={this.toggleDisplayChart}>Toggle display chart</button>
        {*/}
      </div>
    )
  }
}
