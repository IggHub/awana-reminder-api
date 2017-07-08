import React from 'react';
import {Table} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

export default class DisplayScores extends React.Component {
  render(){
    console.log('hello DisplayScores');
    const bsTable = (Object.keys(this.props.studentsScores).length === 0 && this.props.studentsScores.constructor === Object) ? (
                    <div>
                      <BootstrapTable data={ this.props.students }>
                          <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
                          <TableHeaderColumn dataField='grade'>Grade</TableHeaderColumn>
                          <TableHeaderColumn dataField={'user_id'}>User Id</TableHeaderColumn>
                      </BootstrapTable>
                    </div>
                  ) : <div>Hey</div>
    return (
      <div>
        {bsTable}


        <button onClick={() => console.log(this.props.students)}>Students</button>
        <button onClick={() => console.log(this.props.scores)}>Scores</button>
        <button onClick={() => console.log(this.props.studentsScores["Mckenzie Upton"])}>Students Scores</button>
      </div>
    )
  }
}
