//Using Classes, Objects & Spread Operator

let size = 5;

class Stack 
{

    constructor(...x) {

        this.length = x.length;

        if(this.length > size) {

            this.length = 0;

            console.log('Stack Overflow!');

            return;

        }

        for(let i = 0; i<x.length; i++) {

            this[i] = x[i];

        }

    }
 
    //Bug
    // Push(...element) {

    //     for(let i = 0; i < element.length; i++) {

    //         let j = this.length;

    //         let k = i + j;
           
    //         if(k > size) {

    //             console.log('Stack Overflow!');

    //             return;

    //         }

    //         this[k] = element[i];

    //         this.length++;

    //     }  


    // }


    Pop() {

        if(this.length === 0) {

            console.log('Stack Underflow!');

            return;
            
        }

        delete this[this.length-1];

        this.length--;

    }

}


let s1 = new Stack(1,2,3,4);

s1.Pop()

console.log(s1);

s1.Push(5,6,7,8);

s1.Push(5);

// s1.Pop();