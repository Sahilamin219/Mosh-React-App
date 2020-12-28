import React, { Component } from "react";

class Counter extends Component {
  // update phase happens when state or props of a component change
  componentDidUpdate(prevProps, prevState) {
    // we can compare new state with old state or new props with old props
    // and make AJAX call
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // make AJAX call and get a new data from the server
    }
  }
  // state = {
  //   value : this.props.counter.value,
  //   tags:["t1", "t2", "t3"]
  // }
  // // renderTags(){
  //   if(this.state.tags.lenght===0)return <p>Ther are no tags</p>
  //   return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
  // }
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement = () => {
  //   console.log("INCrease", this);
  //   this.setState({value : this.state.value +1});
  // }
  // handleDec = () => {
  //   console.log("INCrease", this);
  //   this.setState({value : this.state.value -1});
  // }
  render() {
    console.log("counter-rendering");
    // console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={ () => this.handleIncrement({id:1}) }
          onClick={() => this.props.onIncr(this.props.counter)}
          //passes complete object instead of id
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecr(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          onDelete
        </button>
        {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        {this.state.tags.lenght ===0 && "plz create one"}
        {this.renderTags()} */}
      </div>
      // <div><h1>heloo</h1></div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes+= this.state.value === 0 ? "warning" : "primary" ;
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
  formatCount() {
    // const {value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
