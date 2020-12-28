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
  constructor(props) {
    //adding a constructor
    super(props); //calling construtor from a parent class
    console.log("App-Constructor");
    // this.state=this.props.something;
    // this.setState() will give error bcuz it can only be called
    // we an component is rendered and placed in the DOMError.
  }
  componentDidMount() {
    // this method is called after our component is rendered
    // into the DOM
    // Ajax call
    // this.state({movies});
    console.log("App-mounted");
  }
  componentWillUnmount() {
    // this method is called just before a component is removed from the DOM
    console.log("Counter - Unmount");
  }
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
    console.log("app-rendered");
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
// when a componet is mounted that means its in the DOM and its the right place to make Ajax calls
// and get the data from the server
