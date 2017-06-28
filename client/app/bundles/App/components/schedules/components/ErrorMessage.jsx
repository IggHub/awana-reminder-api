import React from 'react';

import {Glyphicon} from 'react-bootstrap';

const styles = {
  errorMessage: {
    color: 'white',
    backgroundColor: '#f44336',
    position: 'fixed',
    right: '125px',
    bottom: '25px',
    width: '250px',
    height: '20px',
    textAlign: 'center',
    opacity: '0.7'
  },
  icon: {
    float: 'right',
    marginTop: '2px',
    marginRight: '3px',
    cursor: 'pointer',
  },
}

export default class ErrorMessage extends React.Component {
  render(){
    return (
      <div style={styles.errorMessage}>One of the forms is still empty!
          <a onClick={this.props.toggleErrorMessage}><Glyphicon style={styles.icon} glyph="remove" /></a>
      </div>
    )
  }
}
