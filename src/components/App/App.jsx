import React, { Component } from 'react';
import TodoList from '../../containers/TodoList/TodoList';
import TodoForm from '../../containers/TodoForm/TodoForm';
import TodoListAnalytics from '../../containers/TodoListAnalytics/TodoListAnalytics';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='appDetails'>
        <div>
          <h1 className="title"> Todo Form </h1>
          <TodoForm />
        </div>
        <div>
          <h1 className="title"> Todo List</h1>
          <TodoList />
        </div>
        <div>
          <h1 className="title"> List Items Category Analytics </h1>
          <TodoListAnalytics />
        </div>
      </div>
    );
  }
}
