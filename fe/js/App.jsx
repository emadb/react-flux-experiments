import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Home from './Home'

require('../sass/style.scss');

export default class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home"><strong>Home</strong></Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/hello">hello</Link></li>
        </ul>
         {this.props.children}
      </div>
    );
  }
};

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="home" component={require('./Home')} />
      <Route path="products" component={require('./products/ProductListContainer')} />
      <Route path="hello" component={require('./Hello')} />
    </Route>
  </Router>
), document.getElementById('appContainer'));
