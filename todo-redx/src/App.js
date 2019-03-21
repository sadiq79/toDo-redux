import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo';
import ToDoList from './Components/ToDoList';
import { connect } from 'react-redux';
import {add} from '../src/redux/Action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:''
    }
  }
  handleClick =() =>{
    this.props.dispatch(add(this.state.value))
  }
  handlechange =(e) =>{
    this.setState({
      value:e.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <ToDo click={this.handleClick} change={this.handleChange}/>
        <ToDoList todos={this.props.todos}/>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state)
  return {
    todos:state.todo,
  }
}
export default connect(mapStateToProps)(App);
