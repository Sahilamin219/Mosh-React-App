import React, { Component } from "react";
import "./styles.css";
import Counters from "./Components/counters";
import NavBar from "./Components/navbar";

// export default function App() {
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncr = (counter) => {
    // console.log("working");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    // console.log("working");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterID) => {
    console.log("Event Handler Called");
    // console.log(this.state.counters[0].id);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    // console.log(counters[0].id);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncr={this.handleIncr}
            onDecr={this.handleDelete}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
