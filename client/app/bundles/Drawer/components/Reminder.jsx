import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Schedule from './schedules/Schedule';

export default class Reminder extends React.Component {
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,
    schedules: PropTypes.array.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { currentUserId: this.props.currentUserId, schedules: this.props.schedules };
  }

  render() {
    return (
      <div>
        <Grid>
          <Schedule currentUserId={this.props.currentUserId} />
        </Grid>
      </div>
    );
  }
}
