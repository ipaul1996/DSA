//Implementation of Enqueue and Dequeue operation with the help of JS
let q=[];
let size=5;

function Enqueue(el) {
    if(q.size<5) {
        return q.push(el);
    } else {
        return 'Overflow';
    }
}

function Dequeue() {
    if(q.size>0) {
        return q.shift();
    } else {
        return 'Underflow';
    }
    
}