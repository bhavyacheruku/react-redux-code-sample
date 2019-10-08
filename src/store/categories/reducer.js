import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    categoriesList: [],
    isErrorFetchingList: false
})

export default function reduce(state = initialState, action ={}) {
    switch(action.type) {
        case types.CATEGORIES_LIST_SUCCESS:
            return state.merge({
                categoriesList: action.payload,
                isErrorFetchingList: false
            });
        case types.CATEGORIES_LIST_FAILURE:
            return state.merge({
                isErrorFetchingList: true
            });
        default:
          return state;
    }
}