import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import createStore from './store'
import reducers from './reducers'
import INITIAL_STATE from './initialState'

import Home from './Home'

require('../sass/style.scss');

let store = createStore(reducers, INITIAL_STATE)

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
    this.onStoreChanged = this.onStoreChanged.bind(this)
  }
  componentWillMount() {
    store.subscribe(this.onStoreChanged);
  }
  onStoreChanged(){
    this.setState(store.getState())
  }
  render() {
    let children = <div>HOOME</div>
    if (this.props.children){
      children = React.cloneElement(this.props.children, { store: store });
    }
    return (
      <div>
        <ul>
          <li><Link to="/home"><strong>Home</strong></Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
         {children}
      </div>
    );
  }
};

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="home" component={require('./Home')} />
      <Route path="products" component={require('./products/ProductListContainer')} />
    </Route>
  </Router>
), document.getElementById('appContainer'));
