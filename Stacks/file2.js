//Using classes, Object, array

let size = 10;

class Stack 
{

    constructor() {

        this.length = 0;

        this.stack = [];

    }

    //Time Complexity - O(1)
    Push(element) {

        if(this.length === size) {

            console.log('Stack Overflow!');

            return;

        }

        this.stack[this.length] = element;

        this.length++;

    }


    //Time Complexity - O(n)
    Pop() {

        let stack1 = [];

        if(this.length === 0) {

            console.log('Stack Underflow!');
            
        }

        for(let i = 0; i < this.length-1; i++) {
           
            stack1[i] = this.stack[i];

        }

        this.stack = stack1;

        this.length--;

        return this.stack;

    }

    Peek() {

        if(this.length === 0) {

            console.log('Stack is Empty');

        }

        return this.stack[this.length-1];
        
    }

}

let s1 = new Stack();

s1.Push(5);

s1.Push(10);

s1.Push(15);

s1.Push(20);

console.log(s1);

s1.Pop();

s1.Pop();

console.log(s1);

