import React from 'react';
import {Table} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../scores/stylesheets/react-bootstrap-table-all.min.css';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      pointsEthan: 10 + i,
      pointsAmanda: 5 + i,
      week: id
    });
  }
}

addProducts(5);

export default class DisplayScores extends React.Component {
  render(){
    
    return (
      <div>
        <BootstrapTable data={ products }>
            <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='pointsEthan'>Ethan</TableHeaderColumn>
            <TableHeaderColumn dataField={'points' + 'Amanda'}>Amanda</TableHeaderColumn>
            <TableHeaderColumn dataField='week'>Week</TableHeaderColumn>
        </BootstrapTable>



        <BootstrapTable data={ this.props.scores }>
            <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='point'>Points</TableHeaderColumn>
            <TableHeaderColumn dataField='completed_at'>Completed At</TableHeaderColumn>
            <TableHeaderColumn dataField='week'>Week</TableHeaderColumn>
            <TableHeaderColumn dataField='student_id'>student Id</TableHeaderColumn>
        </BootstrapTable>
        <button onClick={() => console.log(this.props.students)}>Students</button>
        <button onClick={() => console.log(this.props.scores)}>Scores</button>
      </div>
    )
  }
}
