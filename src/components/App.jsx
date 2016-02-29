import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Routes from './Routes';
import Home from './Home';

require('../sass/style.scss');

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
};

ReactDOM.render((
  <Router>
    {Routes(App)}
  </Router>
), document.getElementById('appContainer'));
