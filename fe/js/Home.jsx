import React from 'react';
import Router from 'react-router';
import Composer from './Composer'
import dispatcher from './AppDispatcher'

class Home extends React.Component {
  send(){
    dispatcher.dispatch({
      type: 'UPDATE_PROPS',
      data: {message: 'hellooooo'}
    });
  }
  render() {
    return (
        <div className="view">
          Welcome!
          <div>{this.props.message}</div>
          <button onClick={this.send.bind(this)}>Send message</button>
        </div>
      );
  }
}

export default Composer(Home)
