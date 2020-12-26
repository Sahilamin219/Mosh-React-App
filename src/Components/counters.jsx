import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncr, onDecr } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncr={onIncr}
            onDecr={onDecr}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
            // selected={true}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
