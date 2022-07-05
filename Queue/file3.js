//Implemention of Queue using stack
//Unlimited Queue
let s1=[];
let s2=[];

function Enqueue(el) {
    s1.push(el);
}

function Dequeue() {
    if(s2.length===0) {
        if(s1.length===0) {
            return 'Underflow';
        } else {
            while(!s1.length) {
               s2.push(s1.pop()) ;
            }
            return s2.pop();
        }
    } else {
        return s2.pop();
    }
}