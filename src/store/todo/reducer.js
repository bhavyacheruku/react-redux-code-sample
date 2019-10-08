import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  todoList: [],
  isErrorAddingItem: false,
  isErrorUpdatingStatus: false
})

export default function reduce(state = initialState, action ={}) {
    switch(action.type) {
        case types.TODO_ITEM_SUCCESS:
            return state.merge({
                todoList: action.payload,
                isErrorAddingItem: false
            });
        case types.TODO_ITEM_FAILURE:
            return state.merge({
                isErrorAddingItem: true
            });
        case types.UPDATE_TODO_ITEM_SUCCESS:
            return state.merge({
                todoList: action.payload,
                isErrorUpdatingStatus: false
            });
        case types.UPDATE_TODO_ITEM_FAILURE:
            return state.merge({
                isErrorUpdatingStatus: true
            });
        default:
          return state;
    }
}