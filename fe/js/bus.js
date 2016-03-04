import api from './api'

const bus = {
  send(action){
    console.log('sending', action)   
    api.post('/exec', action).end((err, res) => console.log(err, res))
  },
  fromServer(action){
    console.log('fromServer', action)
  }
}

export default bus