import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Message from './Message';
import Schedule from './schedules/Schedule';

export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <Grid>
          <Schedule />
        </Grid>
      </div>
    );
  }
}
