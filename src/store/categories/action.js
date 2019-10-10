import MockApiCall from '../../../server/MockApiCall';
import * as types from './actionTypes'
export function getCategoriesList() {
    return async dispatch => {
        try {
          const response = await MockApiCall.getCategories();
          dispatch({ type: types.CATEGORIES_LIST_SUCCESS, payload: response })
        } catch (error) {
            console.log(error)
            dispatch({ type: types.CATEGORIES_LIST_FAILURE })
        }
    }
}