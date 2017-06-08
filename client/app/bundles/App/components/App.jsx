import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Message from './Message';

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
          <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Button bsStyle="warning">Warning</Button>
          </Row>
          <Message name={this.state.name}/>
        </Grid>
      </div>
    );
  }
}
