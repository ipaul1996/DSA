//Using Classes, Objects & Spread Operator

let size = 5;

class Stack 
{

    constructor(...x) {

        if(x.length>size) {

            this.length = size;

            for(let i = 0; i<size; i++) {

                this[i] = x[i];
    
            }
    
            console.log('Stack Overflow!');

        } else {

            this.length = x.length;

            for(let i = 0; i<x.length; i++) {

                this[i] = x[i];
    
            }

        }
        

    }

 
    Push(...element) {

        if(this.length + element.length > size) {

            for(let i = this.length; i<size; i++) {

                this[i] = element[i-this.length];
            }

            this.length = size;

            console.log('Stack Overflow!');

        } else {

            for(let i = this.length; i<this.length+element.length; i++) {

                this[i] = element[i-this.length];

            } 
            
            this.length+=element.length;

        }


    }


    Pop() {

        if(this.length === 0) {

            console.log('Stack Underflow!');

            return;
            
        }

        delete this[this.length-1];

        this.length--;

    }

}


let s1 = new Stack();

// s1.Pop()

console.log(s1);

s1.Push(5,6,7,8,9,10);

// s1.Push(5);

// s1.Pop();