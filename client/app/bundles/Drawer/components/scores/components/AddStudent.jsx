import React from 'react';

export default class AddStudent extends React.Component {
  render(){
    return (
      <div>
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter grade" />
        <button>Submit</button>
      </div>
    )
  }
}
