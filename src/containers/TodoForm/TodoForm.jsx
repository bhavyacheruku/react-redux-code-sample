import React, {Component} from 'react';
import { connect } from 'react-redux';
import { saveItem } from '../../store/todo/action';
import TodoFormComponent from '../../components/TodoForm/TodoFormComponent';
import { getCategoriesList } from '../../store/categories/action';
import PropTypes from 'prop-types';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            errors: '',
            todoItem: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({
           category: event.target.value,
           errors: ''
        });
    }

    handleTextBox = (event) => {
       this.setState({
          todoItem: event.target.value,
          errors: ''
       });
    }

    saveItem = (event) => {
        event.preventDefault();
        if(this.state.errors.length) return;
        if(!/[a-zA-Z]+/g.test(this.state.todoItem)) {
           this.setState({
               errors: 'Please enter the items to add in the format of alphabets'
           })
           return;
        }
        if(!this.state.category.length || this.state.category === 'Select a category') {
            this.setState({
                errors: 'Please select a category'
            })
            return;
         }
        this.props.saveItem(this.state.category, this.state.todoItem);
    }

    componentDidMount() {
       this.props.getCategoriesList();
    }
    render() {
        return (
           <TodoFormComponent 
              saveItem = {this.saveItem}
              handleChange = {this.handleChange}
              handleTextBox = {this.handleTextBox}
              category = {this.state.category}
              todoItem = {this.state.todoItem}
              errors = {this.state.errors}
              categoriesList = {this.props.categoriesList}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    categoriesList: state.categories.categoriesList
});

const mapDispatchToProps = dispatch => ({
    saveItem: (category, todoItem) => dispatch(saveItem(category, todoItem)),
    getCategoriesList: () => dispatch(getCategoriesList())
});

TodoForm.PropTypes = {
    saveItem: PropTypes.func,
    getCategoriesList: PropTypes.func,
    categoriesList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
