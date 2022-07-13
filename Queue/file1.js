//Operations on a Queue

let front=-1; //responsible for dequeue operation
let rear=-1; //responsible for enqueue operation
let size=5;
let queue=[];


//Function for Enqueue operation
function Enqueue(el) {
  if(rear===size-1) {
    return 'Overflow';
  } else if(front===-1 && rear===-1) {
    front=0;
    rear=0;
  } else {
    rear++;
  }
  queue[rear]=el;
};

//Function for Dequeue operation
function Dequeue() {
    if(front===-1 || front>rear) {
        return 'Underflow';
    } else {
        let temp=queue[front];
        front++;
        return temp;
    }
}


Enqueue(20)

console.log(queue);
Enqueue(30)
Enqueue(40)
Enqueue(50)
Enqueue(60)
console.log(Enqueue(70)) //Overflow



Dequeue();
Dequeue();
Dequeue();
Dequeue();
Dequeue();
console.log(Dequeue());  //Underflow

Enqueue(70)


