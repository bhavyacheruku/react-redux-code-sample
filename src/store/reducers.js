import { combineReducers } from 'redux';
import todo  from './todo/reducer';
import categories  from './categories/reducer';

const rootReducer = combineReducers({
    todo,
    categories
  });
  export default rootReducer;