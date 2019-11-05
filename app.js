var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItems item={item}/>
    )}
  </ul>
)

// var ChocolateCake = () => (
//   <li>Chocolate Cake</li>
// )

// var ChocolatePie = () => (
//   <li>Chocolate Pie</li>
// )

/* --- DYNAMICLY GENERATED VIA PROPS --- */
// var GroceryListItems = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// )

/* --- CLASS INSTANTIATION --- */
class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    // `state` is just an object literal
    this.state = {
      done: false
    };
  }
  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

/* --- PUTTING COMPONENTS IN THE DOM --- */
// ReactDOM.render(<GroceryList/>, document.getElementById("app")); // this gets overwritten by the following line!!
ReactDOM.render(<GroceryList items={['SUPER CHOCO CAKE', 'SUPER CHOCO PIE']}/>, document.getElementById("app"));
