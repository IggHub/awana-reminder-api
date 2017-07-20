import React from 'react';

export default class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input type="text" placeholder="search student..." value={this.props.filterText} onChange={this.props.handleUserInput}/>
      </div>
    )
  }
}
