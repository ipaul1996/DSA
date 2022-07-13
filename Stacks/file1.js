//Operations on a stack


var Top=-1; //It points to the indexes of the stack

var stack=[];

var size=5; //size of the stack

//Function for push operation
function Push (el) {

    if(Top===size-1) {

       return 'Overflow';

    } else {

        Top++;

        stack[Top]=el;

        return stack;

    }   

};

//Function for pop operation
function Pop() {

    if(Top===-1) {

        return 'Underflow';

    } else {

        let temp=stack[Top];

        Top--;

        return temp;

    }
    
}
Push(20)

Push(20)

Push(20)

Push(20)

Push(20)

console.log(Push(20)) //Overflow



Pop();

Pop();

Pop();

Pop();

Pop();

console.log(Pop());  //Underflow

//With the help of javascript we can do push and pop on a stack using push(el) and pop() method.
