import R from 'ramda';
import INITIAL_STATE from './initialState';

function requireAll(m) {
  let files = m.keys();
  return R.reduce((a, r) => {
    let reducerName = r.match(/([^\/]+)(?=\.\w+$)/)[0];
    a[reducerName] = require('./reducers' + r.slice(1));
    return a;
  }, {}, files);
}

let reds = requireAll(require.context('./reducers/', true, /\.js$/));

export default function reducer(state = INITIAL_STATE, action){
  let newState = R.reduce((s,k) => {
    s[k] = reds[k](state[k], action);
    return s;
  }, {}, R.keys(INITIAL_STATE));
  return newState;
}
