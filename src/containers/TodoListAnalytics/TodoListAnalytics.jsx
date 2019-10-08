import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListAnalyticsComponent from '../../components/TodoListAnalytics/TodoListAnalyticsComponent'
import PropTypes from 'prop-types';

class TodoListAnalytics extends Component {
    constructor(props) {
        super(props);
        this.colors = ['#ff572287', '#ff980080', '#39cccc52'];
    }
    checkCategoryGraph = (item) => {
        let count = 0;
        this.props.todoList.forEach(ele => ele.category === item && count++);
        return Math.round((count/this.props.todoList.length)*window.innerHeight);
    }

    render() {
        return (
           <TodoListAnalyticsComponent 
                checkCategoryGraph= {this.checkCategoryGraph}
                todoList = {this.props.todoList}
                categories = {this.props.categories}
                colors = {this.colors}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todo.todoList,
    categories: state.categories.categoriesList
})

TodoListAnalytics.PropTypes = {
    todoList: PropTypes.array,
    categories: PropTypes.array
}

export default connect(mapStateToProps)(TodoListAnalytics);