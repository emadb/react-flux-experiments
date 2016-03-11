import React from 'react'
import dispatcher from './AppDispatcher'

const Composer = (Container, procs = []) => class Composer extends React.Component {
  constructor(props){
    super(props)
    this.state = {props: null}
  }
  componentWillMount(){
    this.subscriptionToken = dispatcher.register(action => {
      if (action.type === 'UPDATE_PROPS') {
        const data = procs.reduce((acc, p) => p(action.data), action.data)
        this.setState({props: data})
      }
    })
  }
  componentWillUnmount() {
    dispatcher.unregister(this.subscriptionToken)
  }
  render() {
    return <Container {...this.state.props} />
  }
}

export default Composer
