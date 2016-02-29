var React = require('react');
var ReactRouter = require('react-router');

var Home = require('./Home');

var Route = ReactRouter.Route;

function getRoutes(App){
  var routes = (
      <Route path="/" component={App}>
        <Route component={Home} />
      </Route>);
    return routes;
  }

module.exports = getRoutes;
