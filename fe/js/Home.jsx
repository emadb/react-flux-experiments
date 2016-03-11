import React from 'react';
import Router from 'react-router';
import Composer from './Composer'
import dispatcher from './AppDispatcher'

class Home extends React.Component {
  send(){
    console.log('send...')
    dispatcher.dispatch({
      type: 'UPDATE_PROPS',
      data: {message: 'hellooooo'}
    });
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('props', nextProps)
  // }
  render() {
    console.log('props-render', this.props)
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
