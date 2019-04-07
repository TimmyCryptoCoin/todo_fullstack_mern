import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: '',
        complete: false
    }

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    //Once title is passed to App.js via props, set state back to zero
    this.setState({title: ''})
}

onChange = (e) => this.setState({[e.target.name] : e.target.value});


  render() {
    return (
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type="text" 
            name="title" 
            style={{flex: '10', padding: '5px'}}
            placeholder="Add Todo ..."
            value ={this.state.title}
            onChange={this.onChange}
            />
            <input type="submit" value = "Submit" className="btn" style={{flex: '1'}}  />
        </form>
           )}
           
          }
          
         export default AddTodo;