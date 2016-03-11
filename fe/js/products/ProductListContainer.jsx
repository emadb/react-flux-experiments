import React from 'react';
import api from '../api'
import broker from '../bus'
import dispatcher from '../AppDispatcher'
import {store} from '../store'
import Composer from '../Composer'

class ProductListContainer extends React.Component{
  onLoad(){
    dispatcher.dispatch({
      type: 'LOAD_PRODUCTS',
      data: {message: 'products'}
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map(p => <li key={p.code}>{p.code}</li>)}
        </ul>
        <button onClick={this.onLoad.bind(this)}>Load</button>
      </div>
    );
  }
};

ProductListContainer.defaultProps = {
  products: []
}

function p1(data){
  data.products = data.products.map(p => {
    p.code = p.code.toUpperCase()
    return p
  })
  return data
}

function p2(data){
  data.products = data.products.map(p => {
    p.code = p.code + '*'
    return p
  })
  return data
}

export default Composer(ProductListContainer, [p1, p2])

dispatcher.register(action => {
  switch(action.type){
    case 'LOAD_PRODUCTS':
      api.get('/products').end((err, res) => {
        dispatcher.dispatch({type: 'UPDATE_PROPS', data: {products: res.body} })
      })
      break;
  }
})
