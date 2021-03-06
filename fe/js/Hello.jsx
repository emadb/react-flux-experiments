import React from 'react'
import _ from 'lodash'
import Composer from './Composer'
import AppDispatcher from './AppDispatcher'

class HelloContainer extends React.Component{

  onChange(value){
    helloActions.valueSelected(value)
  }

  componentWillMount() {
    helloActions.loadItems()
    helloActions.getTesto()
  }
  onChangeTesto(evt){
    AppDispatcher.updateProps({type:'TESTO_LOADED', data: {testo: evt.target.value}})
  }
  render(){
    return (
      <div>
        <MySelect items={[1,2,3]} onChange={this.onChange.bind(this)}/>
        <MySelect items={this.props.filteredItems} />
        <MyText value={this.props.testo} onChangeTesto={this.onChangeTesto.bind(this)}/>
      </div>
    )
  }
}


class MyText extends React.Component{
  render(){
    return (
      <input type="text" value={this.props.value} onChange={this.props.onChangeTesto} />
    )
  }
}

class MySelect extends React.Component{
  onChange(evt){
    this.props.onChange(evt.target.value)
  }
  render(){
    return (
      <select onChange={this.onChange.bind(this)}>{this.props.items.map(i => <option key={i}>{i}</option>)}</select>
    )
  }
}

MySelect.defaultProps = {
  items: []
}


function reducer1(state, action){
  console.log('fn', state, action)
  switch (action.type) {
    case 'ITEM1_SELECTED':
      const items2 =  _.filter(state.items2, (i) => i.startsWith(state.selectedValue))
      return Object.assign(state, {filteredItems: items2})
    default:
      return state;
  }
  return state
}


const helloActions = {
  getTesto(){
    AppDispatcher.updateProps({type:'TESTO_LOADED', data: {testo: 'helllooo'}})
  },
  loadItems(){
    // api call
    AppDispatcher.updateProps({type:'ITEM2_LOADED', data: {items2: ['11','22','13', '23', '31', '32']}})
  },
  valueSelected(value){
    AppDispatcher.updateProps({type:'ITEM1_SELECTED',data: {selectedValue: value}})
  }
}



export default Composer(HelloContainer, [reducer1])
