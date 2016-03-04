export let store = null;

export default function createStore(reducer, initialState) {
  if(store){
    return store;
  }
  var currentReducer = reducer
  var currentState = initialState
  var listeners = []
  
  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)
    var isSubscribed = true

    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      isSubscribed = false
      var index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action)
    listeners.slice().forEach(listener => listener())
    return action
  }

  store = {
    dispatch,
    subscribe,
    getState
  }
  return store;
}
