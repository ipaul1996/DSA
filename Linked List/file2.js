class Node 
{

    constructor(element) {

        this.data = element;

        this.next = null;

    }

}


class LinkedList
{

    constructor() {

        this.head = null;

    }

    insertNodeAtTail(element) {

        let node = new Node(element);

        if(this.head === null) {

            this.head = node;

            return this.head;

        }

        node.next = this.head;

        this.head = node;

        return this.head;

    }

    insertNodeAtTail(element) {

        let node = new Node(element);

        if(this.head === null) {

            this.head = node;

            return this.head;

        }

        let current = this.head;

        while(current.next !== null) {

            current = current.next;

        }

        current.next = node;

        return this.head;

    }

    printList() {

        if(this.head === null) {

            console.log('List is Empty!');

        }

        let current = this.head;

        while(current !== null) {

            console.log(current.data);

            current = current.next;

        }

    }

    //Iterative method for reversing single linked list

    reverseLinkedList() {

        if(this.head === null) {

            console.log('List is Empty');

            return this.head;
        }

        if(this.head.next === null) {

            return this.head;
        }

        let prev = this.head;

        let current = prev.next;

        let post = current.next;

        while(post !== null) {

            current.next = prev;

            prev = current;

            current = post;

            post = post.next;

        }

        current.next = prev;

        this.head.next = null;

        this.head = current;

        return this.head;

    }

    //Middle Node in the Single Linked list, Iterative Method

    middleNodeLinkedListIte() {

        let current = this.head;

        let count = 1;

        while(current.next !== null) {

            current = current.next;

            count++;
        }


        let temp = this.head;  //i=1

        for(let i=2; i<=count/2; i++) {

            temp = temp.next;

        }

         return temp.next.data;
    }


    middleNodeLinkedListTwoPointer() {

        if(this.head === null || this.head.next === null || this.head.next.next === null) {

            return;
        }

        let fast = this.head;

        let slow = this.head;

        while(fast !== null && fast.next !== null) {

            fast = fast.next.next;

            slow = slow.next;

        }

        return slow.data;
    }

    
}


let l1 = new LinkedList();

l1.printList();

l1.insertNodeAtTail(1);

l1.insertNodeAtTail(5);

l1.insertNodeAtTail(10);

// l1.insertNodeAtTail(15);

// l1.insertNodeAtTail(20);

// l1.insertNodeAtTail(25);

// l1.insertNodeAtTail(30);

// l1.insertNodeAtTail(45);


// l1.printList()

// console.log('*********************************');


// l1.reverseLinkedList();

l1.printList()

// console.log(l1.middleNodeLinkedListIte());

console.log(l1.middleNodeLinkedListTwoPointer());



