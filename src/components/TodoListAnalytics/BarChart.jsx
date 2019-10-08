import React, { Component } from 'react';
import './TodoListAnalytics.css';
import PropTypes from 'prop-types';

class BarChart extends Component {
    render() {        
        return (
            <div>
            {this.props.categories.map((category,i) => {    
                let height = 0;     
                this.props.todoList.forEach((item) => {
                    if(category === item.category) height = this.props.checkCategoryGraph(item.category);
                })
                if(height) {            
                    return (
                        <span key={i} className='barChartBlocks' style={{height: `${height}px`, left: `${(window.innerWidth/2)*i/100}em`, backgroundColor: `${this.props.colors[i]}`}}>
                            <span className='tooltip'>{category}</span>
                        </span>
                    )
                }
            })}
            </div>
        );
    }
}
    
BarChart.PropTypes = {
    todoList: PropTypes.array,
    categories: PropTypes.array
}

export default BarChart;