import request from 'superagent'
let baseUrl = 'http://localhost:3000'
const token = 'Bearer ' //+ localStorage.getItem('hep_token')

function logError(err, res){
  if (err) {
    request
      .post(baseUrl + '/log')
      .send({level: 'error', message: res.text })
      .end()
  }
}

function processCallback(req, fn){
  if (typeof fn == 'function'){
    return req.end(function(err, res){
      logError(err, res);
      if (err && res.status === 401){
        window.location.href = '/';
      }
      fn(err, res);
    });
  }
  return req;
}

const api = {
  del(path, fn) {
    var req = request
      .del(baseUrl + path)
      .set('Authorization', token);

    return processCallback(req, fn);
  },
  get(path, fn) {
    var req = request
      .get(baseUrl + path)
      .set('Authorization', token)
      .set('Accept', 'application/json');
    return processCallback(req, fn);
  },
  patch(path, data, fn) {
    var req = request
      .patch(baseUrl + path, data)
      .set('Authorization', token);
    return processCallback(req, fn);
  },
  post(path, data, fn) {
    var req = request
      .post(baseUrl + path, data)
      .set('Authorization', token);
    return processCallback(req, fn);
  },
  put(path, data, fn) {
    var req = request
      .put(baseUrl + path, data)
      .set('Authorization', token);
    return processCallback(req, fn);
  }
}
export default api
