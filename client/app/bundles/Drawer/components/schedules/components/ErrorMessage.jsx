import React from 'react';

import {Glyphicon} from 'react-bootstrap';

const styles = {
  errorMessage: {
    backgroundColor: '#ffffff',
    position: 'fixed',
    right: '105px',
    bottom: '57px',
    width: '145px',
    height: '100px',
    textAlign: 'left',
    opacity: '0.7',
    borderRadius: '10px',
  },
  errorMessageHeader: {
    position: 'relative',
    right: '0px',
    top: '0px',
    width: '145px',
    height: '35px',
    borderRadius: '10px 10px 0% 0%',
    background: '#f44336'
  },
  errorMessageText: {
    color: 'black',
    padding: '10px',
  },
  icon: {
    float: 'right',
    marginTop: '-28px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

export default class ErrorMessage extends React.Component {
  render(){
    return (
      <div style={styles.errorMessage}>
        <div style={styles.errorMessageHeader} />
        <a onClick={this.props.toggleErrorMessage}><Glyphicon style={styles.icon} glyph="remove" /></a>
        <span style={styles.errorMessageText}>Form is incomplete!</span>
      </div>
    )
  }
}
