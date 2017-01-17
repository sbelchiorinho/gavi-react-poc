import React from 'react';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    return (
      <li key={'menu-item-' + this.props.item.id}>
        <a href="#" onClick={this._onItemClick}>
          {this.props.item.label}
        </a>
      </li>
    );
  }

  _onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.item.label);
  }
}
