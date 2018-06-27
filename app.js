/*jshint esversion: 6*/
// TODO

var GroceryList = (props) => (
  <ul>
  <li>{props.items[0]}</li>
  <li>{props.items[1]}</li>
  </ul>
);

var Strawberries = () => (
  <li>Strawberries</li>
)

var Cherries = () => (
  <li>Cherries</li>
)

  ReactDOM.render(<GroceryList items={['cherry', 'strawberry']}/>, document.querySelector("#app"));