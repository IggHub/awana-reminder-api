import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Score from './scores/Score';

export default class Scorer extends React.Component {
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { currentUserId: this.props.currentUserId};
  }

  render() {
    return (
      <div>
        <Grid>
          <h2>Hello Scorer</h2>
          <Score currentUserId={this.props.currentUserId}/>
        </Grid>
      </div>
    );
  }
}
