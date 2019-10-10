import superagent from 'superagent';

class MockApiCall {
    async saveItem (category, item) {
        if(!(category && item)) throw new Error('Missing parameters');
        try {
            const response = await superagent.post('/api/addTodos', {category, item}).set('Content-Type', 'application/json')
            return response.body;         
        } catch (e) {
           throw new Error(e);
        }
    }
    async getCategories () {
        try {
            const response = await superagent.get('/api/getCategories');
            return response.body;
        } catch (e) {
           throw new Error(e);
        }
    }
    async getTodos () {
        try {
            const response = await superagent.get('/api/getAllTodos');
            return response.body;
        } catch (e) {
           throw new Error(e);
        }
    }
    async updateStatus (itemIndex, status) {
        if(!(typeof itemIndex === 'number' && status))  throw new Error('Missing Parameters');
        if(status !== 'done' && status !== 'new') throw new Error('Incorrect Parameters');
        try {
            const response = await superagent.put('/api/updateTodoStatus', {itemIndex, status}).set('Content-Type', 'application/json');
            return response.body;
        } catch (e) {
           throw new Error(e);
        }
    }
}

export default new MockApiCall();