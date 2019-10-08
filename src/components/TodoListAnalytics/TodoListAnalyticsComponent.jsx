import React, { Component } from 'react';
import './TodoListAnalytics.css';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

class TodoListAnalyticsComponent extends Component {
    render() {
        return (
            <div className='list'>
                {
                    this.props.todoList.length 
                    ?
                    <div>
                        <span className='graphDetailYAxis'>Number of todo Items</span>
                        <div className='barChart'>                    
                            <div className='charts'>
                                <BarChart 
                                    checkCategoryGraph= {this.props.checkCategoryGraph}
                                    todoList = {this.props.todoList}
                                    categories = {this.props.categories}
                                    colors = {this.props.colors}
                                />
                            </div>                           
                        </div>
                        <span className='graphDetailsXAxis'>Categories</span>
                    </div>
                    :
                    (<div className='noItems'>Required atleast one item in the list to perform analytics</div>)
                }
            </div>
        )
    }
}

TodoListAnalyticsComponent.PropTypes = {
    todoList: PropTypes.array,
    categories: PropTypes.array
}

export default TodoListAnalyticsComponent;