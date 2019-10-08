import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markStatus }  from  '../../store/todo/action';
import TodoListComponent from '../../components/TodoList/TodoListComponent';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div className='list'>
                {
                    this.props.todoList.length 
                    ?
                    (<ul className='list-group col-sm-4'>
                        <TodoListComponent 
                            markStatus = {this.props.markStatus}
                            todoList = {this.props.todoList}
                        />
                    </ul>)
                    :
                    (<div className='noItems'>No Items added to the list</div>)
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    markStatus: (itemIndex, status) => dispatch(markStatus(itemIndex, status))
});
const mapStateToProps = (state) => ({
    todoList: state.todo.todoList
});

TodoList.PropTypes = {
    todoList: PropTypes.array,
    markStatus: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);