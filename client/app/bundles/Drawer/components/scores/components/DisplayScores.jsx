import React from 'react';
import {Table} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

const cellEditProp = {
  mode: 'click'
};

export default class DisplayScores extends React.Component {
  render(){
    const bsTable = [];
    if(Object.keys(this.props.studentsScores).length > 0) {
      for(var i = 0; i < Object.keys(this.props.studentsScores).length; i++){
        bsTable.push(
          <div key={i}>
            <h4>{Object.keys(this.props.studentsScores)[i]}</h4>
            <BootstrapTable data={this.props.studentsScores[Object.keys(this.props.studentsScores)[i]]} cellEdit={ cellEditProp }>
              <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='week'>Week</TableHeaderColumn>
              <TableHeaderColumn dataField='point'>Point</TableHeaderColumn>
            </BootstrapTable>
          </div>
        )
      }
    };
    return (
      <div>
        {bsTable}
        <BootstrapTable data={ this.props.students } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='grade'>Grade</TableHeaderColumn>
          <TableHeaderColumn dataField={'user_id'}>User Id</TableHeaderColumn>
        </BootstrapTable>

        <button onClick={() => console.log(this.props.students)}>Students</button>
        <button onClick={() => console.log(this.props.scores)}>Scores</button>
        <button onClick={() => console.log(this.props.studentsScores)}>Students Scores</button>
      </div>
    )
  }
}
