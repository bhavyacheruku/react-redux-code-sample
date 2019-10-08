import React, { Component } from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

class TodoListComponent extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map((item,i) => {
                    return (
                        <li key={i} className='list-group-item'>
                            <span className={item.status === 'done' ? 'statusCompletedTick' :  'statusCompletedTick visibilityHidden'}>L</span>
                            {item.item} 
                            <span className='listStatus' onClick={() => this.props.markStatus(i, item.status === 'done' ?  'new' : 'done')}>
                                {item.status === 'done' ?  'UNDO' : 'Mark Done'}
                            </span>
                        </li>
                    )
                })}
           </div>
        );
    }
}

TodoListComponent.PropTypes = {
    todoList: PropTypes.array,
    markStatus: PropTypes.func
}

export default TodoListComponent;