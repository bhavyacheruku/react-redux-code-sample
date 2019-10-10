import reducer from '../../src/store/todo/reducer'
import * as types from '../../src/store/todo/actionTypes'
import chai, { expect } from 'chai';
import Immutable from 'seamless-immutable';

const mockObject = [{category:'test', name: 'testing', status:'new'}]
const statusChanged = [{category:'test', name: 'testing', status:'done'}]
const initialState = Immutable({
    todoList: [],
    isErrorAddingItem: false,
    isErrorUpdatingStatus: false,
    isFecthingTodo: false
  })

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer()).to.deep.equal(initialState)
  });

  it('should handle TODO_ITEM_SUCCESS', () => {
    expect(reducer(initialState, {
        type: types.TODO_ITEM_SUCCESS,
        payload: mockObject
      })
    ).to.deep.equal(
      {
        todoList: mockObject,
        isErrorAddingItem: false,
        isErrorUpdatingStatus: false,
        isFecthingTodo: false
      }
    )
  });

  it('should handle TODO_ITEM_FAILURE', () => {
    expect(reducer(initialState, {
        type: types.TODO_ITEM_FAILURE
      })
    ).to.include(
      {
        isErrorAddingItem: true
      }
    )
  });

  it('should handle UPDATE_TODO_ITEM_SUCCESS', () => {
    expect(reducer(initialState, {
        type: types.UPDATE_TODO_ITEM_SUCCESS,
        payload: statusChanged
      })
    ).to.deep.equal(
      {
        todoList: statusChanged,
        isErrorAddingItem: false,
        isErrorUpdatingStatus: false,
        isFecthingTodo: false
      }
    )
  });

  it('should handle UPDATE_TODO_ITEM_FAILURE', () => {
    expect(reducer(initialState, {
        type: types.UPDATE_TODO_ITEM_FAILURE
      })
    ).to.include(
      {
        isErrorUpdatingStatus: true
      }
    )
  });
})