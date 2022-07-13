//Using JS array, push(x), pop()

let Stack = [1,2];

let size = 4;


function Push(el) {

    if(Stack.length === size) {

      console.log('Stack Overflow!');

      return;
      
    }

    Stack.push(el);

}


function Pop() {

    if(Stack.length === 0) {

      console.log('Stack Underflow!');

      return;
      
    }

    Stack.pop();

}


Push(5);

Push(10);

Push(18); //Overflow

Pop();
Pop();
Pop();
Pop();
Pop(); //Underflow

