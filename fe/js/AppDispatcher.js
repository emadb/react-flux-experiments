const Dispatcher = require('flux').Dispatcher
const dispatcher = new Dispatcher()

dispatcher.updateProps = data => {
  dispatcher.dispatch({type: 'UPDATE_PROPS', data: data })
}

export default dispatcher
