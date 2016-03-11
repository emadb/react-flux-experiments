// PROTOTIPO


var Container = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  componentWillMount: function(){
    var self = this
    actions.onLoad(function(data){
      console.log('updated')
      self.setState({props: data})
    })
  },
  getInitialState: function(){
    return {props: null}
  },
  render() {
    console.log('render prov')
    var children = React.cloneElement(this.props.children, this.state.props);
    return React.Children.only(children)
  }
})

var actions = {
  loadProducts: function(){
    var self = this
    console.log('loadin')
    setTimeout(function(){
      self.fn({products: [1,2,3,4]})
    }, 1000)
  },
  onLoad(fn){
    this.fn = fn
  }
}

var MyComponent = React.createClass({
  propTypes: {
    products: React.PropTypes.array
  },
  componentWillReceiveProps: function(next){
    console.log('next', next)
  },
  componentDidMount: function(){
    console.log('dm')
    actions.loadProducts()
  },
  render: function(){
    return (
    <div>
      <div>{this.props.products}</div>
      Hello
    </div>
    ) 
  }
})

React.render(<Container ><MyComponent /></Provider>, document.body);