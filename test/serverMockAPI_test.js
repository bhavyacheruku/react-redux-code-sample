import { expect } from 'chai';
import mockApiCall from '../server/MockApiCall';
import sinon from 'sinon';

describe('mock api calls ', () => {

    describe('saveItem function ',  () => {
             
        it('should save the items', () => {
            const stub = sinon.spy(mockApiCall, 'saveItem')
            stub.restore(); 
            stub('testing', 'test')      
            sinon.assert.calledOnce(stub)
        });
        it('should check if params are passed', async () => {
            const stub = sinon.spy(mockApiCall, 'saveItem')
            stub.restore(); 
            let error = ''
            await stub().catch ((e)  => { error = e})
            expect(error).to.deep.equal(new Error("Missing Parameters"))           
        });
    });
    describe('updateStatus function ',  () => {  
        const stubSaveItem = sinon.stub(mockApiCall, 'saveItem')
        stubSaveItem.restore();  
        stubSaveItem.withArgs('testing', 'test')
        it('should check if params are passed', async () => {
            const stub = sinon.spy(mockApiCall, 'updateStatus')
            stub.restore();
            let error = ''
            await stub().then(() => {
            }).catch((e) => {
                error = e
            })
            expect(error).to.deep.equal(new Error("Missing Parameters"))
        });
        it('should throw if invalid params passed', async() => {
            const stub = sinon.spy(mockApiCall, 'updateStatus')
            stub.restore();
            let error = ''
            await stub(null, 'done').then((object) => {
            }).catch((e) => {
                error = e
            })
            expect(error).to.deep.equal(new Error("Missing Parameters"))
        });
    });
});