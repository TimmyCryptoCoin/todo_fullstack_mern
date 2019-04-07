import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

import Todos from './components/Todos'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './components/pages/about'
import './App.css';

class App extends Component {
  state = {
    todos: [
    ]
  }

componentDidMount() {
    axios.get('http://localhost:8050/api/todos')
        .then(res => {
        console.log(res)
        this.setState({todos: res.data})
    })
}

  markComplete = (_id) => {
      console.log(_id)
      axios.put(`http://localhost:8050/api/todos/${_id}`)
      .then(this.setState({todos: this.state.todos.map(todo => {
      if(todo._id===_id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  }) )
      



}
  
  delTodo = (_id) => {
      console.log(_id)
      axios.delete(`http://localhost:8050/api/todos/${_id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo._id!==_id)]}))
      
  }
  
  addTodo = (title) => {
          axios.post('http://localhost:8050/api/todos', {
          title,
          completed: false
      })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}))
      .catch(err => console.log(err))
          
      
      
  }
  
  render() {
    
    return (
        <Router>
         <div className="App">
     <Header />
     <Route exact path="/" render={props => (
     <React.Fragment>
           <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>     
                </React.Fragment>
                 )} />
                 <Route path="/about" component={About} />
      </div>   
        </Router>
      
    );
  }
}

export default App;
