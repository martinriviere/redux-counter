import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch({ type: "ADD" }),
  addTen: () => dispatch({ type: "ADD_10" }),
  removeOne: () => dispatch({ type: "REMOVE" }),
  removeTen: () => dispatch({ type: "REMOVE_10" }),
  reset: () => dispatch({ type: "RESET" })
});

const Counter = ({ counter, addOne, addTen, removeOne, removeTen, reset }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={addTen}>+10</button>
    <button onClick={removeOne}>-1</button>
    <button onClick={removeTen}>-10</button>
    <button onClick={reset}>Reset</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
