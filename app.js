/*jshint esversion: 6*/
// TODO

var GroceryList = (item1, item2) => (
  <ul>
  <Strawberries />
  <Cherries />
  </ul>
);

var Strawberries = () => (
  <li>Strawberries</li>
)

var Cherries = () => (
  <li>Cherries</li>
)

  ReactDOM.render(<GroceryList />, document.querySelector("#app"));