import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this)
  }
  componentWillMount(){
    let refRoot = firebase.database().ref('/todo/')
    refRoot.on('child_added', (snap)=>{
      //console.log(snap.val())
      let currrentTodo = this.state.todos.push(snap.val())
      this.setState({todo: currrentTodo})
    })
  }
  addTodo(ev){
    ev.preventDefault()
    let refRoot = firebase.database().ref('/todo/')
    refRoot.push({todo: this.refs.todo.value})
  }

  render() {
    console.log(this.state.todo)
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
