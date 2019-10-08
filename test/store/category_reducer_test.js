import reducer from '../../src/store/categories/reducer'
import * as types from '../../src/store/categories/actionTypes'
import chai, { expect } from 'chai';
import Immutable from 'seamless-immutable';

const mockCategories = ['test']
const initialState = Immutable({
    categoriesList: [],
    isErrorFetchingList: false
  })

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer()).to.deep.equal(initialState)
  });

  it('should handle CATEGORIES_LIST_SUCCESS', () => {
    expect(reducer(initialState, {
        type: types.CATEGORIES_LIST_SUCCESS,
        payload: mockCategories
      })
    ).to.deep.equal(
      {
        categoriesList: mockCategories,
        isErrorFetchingList: false,
      }
    )
  });

  it('should handle CATEGORIES_LIST_FAILURE', () => {
    expect(reducer(initialState, {
        type: types.CATEGORIES_LIST_FAILURE
      })
    ).to.include(
      {
        isErrorFetchingList: true
      }
    )
  });
});