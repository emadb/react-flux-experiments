var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Home = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="view">
          Welcome!
      </div>
      );
  }
});



module.exports = Home;
