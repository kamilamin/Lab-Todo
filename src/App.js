import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(ev){
    ev.preventDefault()
    console.log(this.refs.todo.value)
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo</h2>
          <form onSubmit={this.addTodo}>
            <input type="text" ref='todo'/>
            <button>Add Todo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
