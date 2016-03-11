import React from 'react'
import dispatcher from './AppDispatcher'

const Composer = Container => class extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  componentWillMount(){
    dispatcher.register(action => {
      console.log('received', action)
      if (action.type === 'UPDATE_PROPS') {
        this.setState(action.data)
      }
    })
  }
  render() {
    console.log('state', this.state)
    return <Container {...this.state} />
  }
};


export default Composer
