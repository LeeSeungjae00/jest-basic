const Stack = require('../stack');

describe('Stack!', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('init', () => {
        expect(stack.index).toBe(0);
    })

    it('push 4 times', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        expect(stack.index).toBe(4);
    })

    describe('pop', () => {
        it('pop - basic', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);

            expect(stack.index).toBe(1);
        })
        it('pop - when index 0 pop', () => {
            expect(() => {
                stack.pop();
                stack.pop();
            }).toThrow('index is 0, stack is null');


            expect(stack.index).toBe(0);
        })
    });
    describe('peek', () => {
        it('peek - basic', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.peek()).toBe(3);
            expect(stack.index).toBe(3);
        })
        it('peek - when index 0 pop', () => {
            expect(() => {
                stack.pop();
                stack.pop();
            }).toThrow('index is 0, stack is null');
        })
    })
})