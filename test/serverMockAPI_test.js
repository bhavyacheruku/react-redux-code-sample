import { expect } from 'chai';
import mockApiCall from '../src/server/MockApiCall';

describe('mock api calls ', () => {
    const name = 'testing';
    const category = 'test';
    describe('saveIetm function ',  () => {
        it('should save the items', () => {
            mockApiCall.saveItem(category, name).then((object) => {
                expect(object).to.deep.equal([{category,  item, 'status': 'new'}]);
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
});