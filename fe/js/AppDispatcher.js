const Dispatcher = require('flux').Dispatcher
const dispatcher = new Dispatcher()

dispatcher.updateProps = (action) => {
  dispatcher.dispatch({type: action.type, subType: 'UPDATE_PROPS', data: action.data })
}

export default dispatcher
