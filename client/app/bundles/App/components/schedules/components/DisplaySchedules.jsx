import React from 'react';
import {Thumbnail, Row, Col, Glyphicon} from 'react-bootstrap';
import Moment from 'moment';

var styles = {
  icon: {
    float: 'right',
    marginTop: '2px',
    marginRight: '-6px',
  },
  spacer: {
    marginTop: '50px',
  },
  thumbnail: {
    textDecoration: 'none',
    color: '#000',
    background: '#FFFFCC',
    display: 'block',
    height: '17em',
    width: '17em',
    padding: '1em',
    borderStyle: 'none',

    MozBoxShadow:     '4px 4px 3px #E3C88C',
    WebkitBoxShadow:  '4px 4px 3px #E3C88C',
    boxShadow:        '4px 4px 3px #E3C88C',
  }

}

export default class DisplaySchedules extends React.Component{

  checkIndexForTilt(n){
    if (n % 2 === 0) {
      styles["thumbnail"]["transform"] = "rotate(3deg)"
    } else if (n % 3 === 0) {
      styles["thumbnail"]["transform"] = "rotate(-4 deg)"
    } else {
      styles["thumbnail"]["transform"] = "rotate(-2 deg)"
    }
    return styles["thumbnail"]["transform"];
  };

  render(){

    return (
      <Row>
        <h2>List Schedules:</h2>
        <div style={styles.spacer} />
        {this.props.schedules.filter((schedule) => {
          return schedule.user_id === parseInt(this.props.currentUserId)
        })
        .map((schedule, index) =>
          <Col key={index} lg={3} md={4} sm={6}>

            <Thumbnail style={{...styles.thumbnail, ...{transform: this.checkIndexForTilt(index)}}} >
              <a href="#" onClick={() => this.props.deleteSchedule(schedule.id)}><Glyphicon style={styles.icon} glyph="remove" /></a>
              <h4>{Moment(schedule.date).format('MMM DD YYYY')} <a href="#" onClick={() => this.props.handleEdit(schedule.id)}>(Edit)</a></h4>
                {this.props.workers.filter(function(worker){
                  return worker.schedule_id === schedule.id
                })
                .map((worker, index) =>
                  <h6 key={index}>{worker.name}</h6>
                )
              }
              <h6>- <em>{schedule.message}</em></h6>



            </Thumbnail>
          </Col>
        )}
        <div style={styles.spacer} />
      </Row>
    )
  }
}
