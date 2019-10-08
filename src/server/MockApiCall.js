class MockApiCall {
    constructor() {
        this.todoList = [];
        this.categories = ['Entertainment', 'Work', 'Personal']
    }
    async saveItem (category, item) {
        if(!(category && item)) throw new Error('Missing parameters');
        try {
          let obj = {
              category, 
              item,
              status: 'new'
          }
           this.todoList.push(obj);
           return this.todoList;
        } catch (e) {
           throw new Error(e);
        }
    }
    async getCategories (item) {
        try {
           return this.categories;
        } catch (e) {
           throw new Error(e);
        }
    }
    async updateStatus (itemIndex, status) {
        try {
          this.todoList[itemIndex].status = status
           return this.todoList;
        } catch (e) {
           throw new Error(e);
        }
    }
}

export default new MockApiCall();