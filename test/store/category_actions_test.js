// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../src/store/categories/action'
// import * as types from '../../src/store/categories/actionTypes'
// import { expect } from 'chai';

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// describe('category actions', () => {
//     describe('getCategoriesList actions',  () => {
//         it('Get categories CATEGORIES_LIST_SUCCESS', () => {
//             const store = mockStore({ categoriesList: [] })
//             return store.dispatch(actions.getCategoriesList()).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.CATEGORIES_LIST_SUCCESS)
//             });
//         });
//     });
// }); 