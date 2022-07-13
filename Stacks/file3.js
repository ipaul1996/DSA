//Using Calsses and object

class Stack 
{

    constructor() {

        this.length = 0;

    }

    Push(element) {

        if(this.length === size) {

            console.log('Stack Overflow!');

            return;

        }

        this[this.length] = element;

        this.length++;

    }


    Pop() {

        if(this.length === 0) {

            console.log('Stack Underflow!');
            
        }

        delete this[this.length-1];

        this.length--;

    }

}


let s1 = new Stack();

s1.Push(10);

s1.Push(15);

s1.Push(20);

s1.Push(25);

console.log(s1);

s1.Pop();

console.log(s1);