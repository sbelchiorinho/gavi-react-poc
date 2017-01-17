import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class App extends React.Component {

  constructor(){
    //init component state
    super();
    this.state = {
      items: ItemsStore.getAll() //init as empty array when using remote server
    }
  }  
  
  componentWillMount() {
    //runs BEFORE the component is rendered
    this._fetchItems();
  }

  render() {
    return (
      <div className={styles.app}>
        <Body items={this.state.items} />
        <Footer />
      </div>
    );
  }
  
  componentDidMount() {
    //runs AFTER the component is rendered
    //notice that this will only run if the virtual DOM changes
    setInterval(() => this._fetchItems(), 3000);
  }

  
  componentWillUnmount() {
    //runs BEFORE the component is removed from the virtual DOM
    ItemsStore.removeChangeListener(this._handlerItemsChange);
  }

  _fetchItems(){
    ItemsStore.addChangeListener(this._handlerItemsChange);
    AppActions.getItems();

    //if we retrieved data from an API,  example
    /*
    jQuery.ajax({
      method: 'GET',
      url: '/api/items',
      success: (items) => {
        this.setState({ items })
      }
    });
    */
  }

  _handlerItemsChange = () => {
    this.setState({ items: ItemsStore.getAll()});
  }

}
