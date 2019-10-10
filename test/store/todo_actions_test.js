// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../src/store/todo/action'
// import * as types from '../../src/store/todo/actionTypes'
// import { expect } from 'chai';

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// describe('todo actions', () => {
//     describe('saveItem actions',  () => {
//         it('creates TODO_ITEM_SUCCESS when saving has been done', () => {
//             const store = mockStore({ todoList: [] })
//             return store.dispatch(actions.saveItem('test', 'testing')).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.TODO_ITEM_SUCCESS)
//             });
//         });
//         it('creates TODO_ITEM_FAILURE when saving failes', () => {
//             const store = mockStore({ todoList: [] })
//             return store.dispatch(actions.saveItem()).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.TODO_ITEM_FAILURE)
//             });
//         });
//     }); 
//     describe('markStatus actions',  () => {
//         it('creates UPDATE_TODO_ITEM_SUCCESS when saving has been done', () => {
//             const store = mockStore({ todoList: [] })
//             return store.dispatch(actions.markStatus(0, 'done')).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.UPDATE_TODO_ITEM_SUCCESS)
//             });
//         });
//         it('creates UPDATE_TODO_ITEM_FAILURE when saving failes', () => {
//             const store = mockStore({ todoList: [] })
//             return store.dispatch(actions.markStatus()).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.UPDATE_TODO_ITEM_FAILURE)
//             });
//         });
//     }); 
//     describe('getTodos actions',  () => {
//         it('creates FETCH_TODO_ITEM_SUCCESS when saving has been done', () => {
//             const store = mockStore({ todoList: [] })
//             return store.dispatch(actions.getTodos()).then(() => {
//                 expect(store.getActions()).to.have.deep.property('[0].type', types.FETCH_TODO_ITEM_SUCCESS)
//             });
//         });       
//     }); 
// })