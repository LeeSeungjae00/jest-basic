class Stack {
    constructor() {
        // this.arr = [];
        this.head = null;
        this.index = 0;
    }
    push(val) {
        const node = { val , next : this.head }
        this.head = node
        ++this.index;
    }
    pop() {
        if (this.index === 0) {
            throw Error('index is 0, stack is null')
        }

        const node = this.head;
        this.head = node.next;
        this.index--;

        return node.val;
    }
    peek() {
        if (this.index === 0) {
            throw Error('index is 0, stack is null')
        }
        
        return this.head.val;
    }
}

module.exports = Stack;