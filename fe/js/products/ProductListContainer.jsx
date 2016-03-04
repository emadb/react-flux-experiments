import React from 'react';
import api from '../api'
import broker from '../bus'
import {store} from '../store'

export default class ProductListContainer extends React.Component{
  onLoad(){
    //broker.send({action: 'LOAD_PRODUCTS'})
    productService.loadProducts()
  }
  componentWillReceiveProps(pp){
   console.log('cwrp',pp) 
  }
  render() {
    return (
      <div>
        <button onClick={this.onLoad.bind(this)}>Load</button>
      </div>
    );
  }
};


const productService = {
  loadProducts(){
    api.get('/products').end((err, res) => {
      console.log(res)

      //broker.fromServer({action: 'PRODUCTS_LOADED', content: res.body})
      store.dispatch({type: 'PRODUCTS_LOADED', content: res.body})
    })
  }
}