import React from 'react';
import {Thumbnail, Row, Col} from 'react-bootstrap';
import Moment from 'moment';

export default class DisplaySchedules extends React.Component{
  render(){
    return (
      <Row>
        <h2>Workers and schedules:</h2>
        <h4>All workers:</h4>
        {this.props.schedules.map((schedule, index) =>
          <Col key={index} lg={3} md={4} sm={6}>
            <Thumbnail>
              <h3>{Moment(schedule.date).format('MMM DD YYYY')}</h3>
                {this.props.workers.filter(function(worker){
                  return worker.schedule_id === schedule.id
                })
                .map((worker, index) =>
                  <h6 key={index}>{worker.name}</h6>
                )
              }
            </Thumbnail>
          </Col>
        )}

      </Row>
    )
  }
}
