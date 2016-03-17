import React from 'react'
import dispatcher from './AppDispatcher'

const Composer = (Container, reducers = []) => class Composer extends React.Component {
  constructor(props){
    super(props)
    this.state = {props: {}}
  }
  componentWillMount(){
    this.subscriptionToken = dispatcher.register(action => {
      if (action.subType === 'UPDATE_PROPS') {
        const state = Object.assign(this.state.props, action.data || {})
        const newState = reducers.reduce((prev, p) => p(prev, action), this.state.props)
        this.setState({props: newState})
      }
    })
  }
  componentWillUnmount() {
    dispatcher.unregister(this.subscriptionToken)
  }
  render() {
    return <Container {...this.state.props} {...this.props} />
  }
}

export default Composer
