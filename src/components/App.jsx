import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

require('../sass/style.scss');

export default class App extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
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
    </Route>
  </Router>
), document.getElementById('appContainer'));
