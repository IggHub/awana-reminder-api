import React from 'react';
import {Table} from 'react-bootstrap';


export default class DisplayScores extends React.Component {
  render(){
    return (
      <div>
        Hello from display scores!
        <h2>Students:</h2>
        <Table>
        {this.props.students.map((student, index) =>

            <tr key={index}>
              <td>{student.name}</td>
            {this.props.scores.filter((score) => {
              return score.student_id === student.id
              })
              .map((score, index) =>
                <td key={index}>Week {score.week}: {score.point}</td>
              )
            }
          </tr>
        )}
        </Table>
        <button onClick={() => console.log(this.props.students)}>Show students</button>
        <button onClick={() => console.log(this.props.scores)}>Show scores</button>
      </div>
    )
  }
}
