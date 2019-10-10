import MockApiCall from '../../../server/MockApiCall';
import * as types from './actionTypes'
export function saveItem(category, item) {
    return async dispatch => {
        try {
          const response = await MockApiCall.saveItem(category, item);
          dispatch({ type: types.TODO_ITEM_SUCCESS, payload: response });
        } catch (error) {           
            dispatch({ type: types.TODO_ITEM_FAILURE });
            throw new Error(error);
        }
    }
}

export function markStatus (itemIndex, status) {
    return async dispatch => {
        try {
          const response = await MockApiCall.updateStatus(itemIndex, status);
          dispatch({ type: types.UPDATE_TODO_ITEM_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: types.UPDATE_TODO_ITEM_FAILURE });
            throw new Error(error);
        }
    }
}

export function getTodos () {
    return async dispatch => {
        try {
          const response = await MockApiCall.getTodos();
          dispatch({ type: types.FETCH_TODO_ITEM_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: types.FETCH_TODO_ITEM_FAILURE });
            throw new Error(error);
        }
    }
}