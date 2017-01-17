import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    let listItems = this._getItems();
    let listItemsCount = this.props.items.length;
    return (
      <div className="list-wrapper">
        <h4>{listItemsCount} items</h4>
        <ul className={styles.menu}>
          {listItems}
        </ul>
      </div>      
    );
  }

  _getItems(){
    return this.props.items.map((item) => {
        return (<MenuItem item={item} />);
    }, this);
  }

}
