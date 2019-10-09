import { expect } from 'chai';
import mockApiCall from '../server/MockApiCall';

describe('mock api calls ', () => {
    const name = 'testing';
    const category = 'test';
    describe('saveItem function ',  () => {
        it('should save the items', () => {
            mockApiCall.saveItem(category, name).then((object) => {
                expect(object).to.have.deep.members([{category,  item, 'status': 'new'}]);
            })
        });
        it('should return the items after saving', () => {
            mockApiCall.saveItem(category, name).then((object) => {
                expect(object).to.be.an('array');
            })
        });
        it('should check if params are passed', () => {
            mockApiCall.saveItem().then((object) => {
                expect(object).to.throw('Missing parameters');
            })
        });
        it('should throw if invalid params passed', () => {
            mockApiCall.saveItem(undefined, null).then((object) => {
                expect(object).to.throw();
            })
        });
    });
    describe('updateStatus function ',  () => {
        it('should update the items status', () => {
            mockApiCall.updateStatus(0, 'done').then((object) => {
                expect(object).to.have.deep.property('[0].status', 'done');
            })
        });
        it('should return the items after saving', () => {
            mockApiCall.updateStatus(0, 'done').then((object) => {
                expect(object).to.be.an('array');
            })
        });
        it('should check if params are passed', () => {
            mockApiCall.updateStatus().then((object) => {
                expect(object).to.throw('Missing parameters');
            })
        });
        it('should throw if invalid params passed', () => {
            mockApiCall.updateStatus("1", null).then((object) => {
                expect(object).to.throw();
            })
        });
    });
    describe('getCategories function ',  () => {
        it('should return the categories', () => {
            mockApiCall.getCategories().then((object) => {
                expect(object).to.be.an('array');
            })
        });
    });
    describe('getTodos function ',  () => {
        it('should return the categories', () => {
            mockApiCall.getTodos().then((object) => {
                expect(object).to.be.an('array');
            })
        });
    });
});