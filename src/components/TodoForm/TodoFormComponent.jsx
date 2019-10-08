import React, {Component} from 'react';
import './TodoForm.css';
import PropTypes from 'prop-types';

class TodoFormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.saveItem} className='form'>
                    <div className='errors'>{this.props.errors}</div>
                    <label className='label'>Category:</label>
                    <select value={this.props.category} onChange={this.props.handleChange} id='categories' className='fields'>
                        <option>Select a category</option>
                        {this.props.categoriesList.map((category, i) => {
                            return (
                                <option key={i}>{category}</option>
                            );
                        })}
                    </select>
                    <label className='label'>Todo Item:</label>
                    <input type='text' value={this.props.todoItem} id='todoItem' placeholder='start entering the list here' className='fields' onChange={this.props.handleTextBox}/>
                    <button type='submit' className= {(!this.props.todoItem.length || this.props.errors.length) ? 'button disable' : 'button' }>SAVE</button>
                </form>
            </div>
        );
    }
}

TodoFormComponent.PropTypes = {
    saveItem: PropTypes.func,
    getCategoriesList: PropTypes.func,
    categoriesList: PropTypes.array
}

export default TodoFormComponent;