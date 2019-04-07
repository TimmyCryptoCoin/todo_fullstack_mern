import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
             return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
    }
    
//    checkStyle = () => {
//        return {
//            checked: this.props.todo.completed ? 'checked' : 'none'
//        }
//    }

    

  render() {
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo._id)} />
            {this.props.todo.title}
            <button onClick={this.props.delTodo.bind(this, this.props.todo._id)}style={btnStyle}>x</button>
            </p>
        </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    float: 'right'
}

export default TodoItem;