import React from 'react';
import api from '../api'
import broker from '../bus'
import {store} from '../store'

export default class ProductListContainer extends React.Component{
  onLoad(){
    //broker.send({action: 'LOAD_PRODUCTS'})
    productService.loadProducts()
  }
  componentWillMount() {
    // EMA: Send the request to load products
    dataProvider.dispatch({type: 'LOAD_PRODUCTS', props:[products], data: {}})
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


const dataProvider = {
  dispatch(action) {
    // send the request to the in-memory bus
  }
}

const actionListeners ={
  register(){
    // register for the actions
  },
  onAction(action){
    switch(action.type){
      case 'LOAD_PRODUCTS':
        api.get('/products').end((err, res) => {
          dataProvider.dispatch({type: 'PRODUCTS_LOADED', props:action.props, data: res.body })
        })
        break;
      case 'PRODUCTS_LOADED':
        // SET the property action.prop to action.data
        break;
    }
  }
}


const productService = {
  loadProducts(){
    api.get('/products').end((err, res) => {
      console.log(res)

      //broker.fromServer({action: 'PRODUCTS_LOADED', content: res.body})
      store.dispatch({type: 'PRODUCTS_LOADED', content: res.body})
    })
  }
}
