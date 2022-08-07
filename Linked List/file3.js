//Finding k-th node of a linked list                                                                    

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

    //k-th node from the end of the list

    //By counting the length of the Linked List
    kthNodeFromLinkedListEnd(k) {

        if(this.head === null) {
       
            return;
        } 
         
        let current = this.head;
         
        let n = 1;
         
        while(current.next !== null) {
             
          current = current.next;
             
          n++;
             
        }
         
        let temp = this.head;
         
        let i = 1;
         
        while(i<n-k+1) {
             
            temp = temp.next;
             
            i++;
        }
         
        return temp.data;
    }

    //By reversing the Linked List
    kthNodeFromLinkedListEndByReversal(k) {

        if(this.head === null) {
       
            return;

        }

        let current = this.head;

        let post = current.next;

        let prev = null;

        while(post != null) {

            current.next = prev;

            prev = current;

            current = post;

            post = post.next;

        }

        current.next = prev;

        this.head.next = null;

        this.head = current;

        let temp = this.head;

        let i = 1;

        while(i<k) {

            temp = temp.next;

            i++;

        }

        return temp.data;

    }


    //By Using two pointers
    kthNodeFromLinkedListEndByTwoPointer(k) {

        if(this.head === null) {
       
            return;

        }

        let p = this.head;

        let q = this.head;

        let i = 1;

        while(i<k) {

            p = p.next;

            i++;

        }

        while(p.next !== null) {

            p = p.next;

            q = q.next;
        }

        return q.data;

    }
    

}


let l = new LinkedList();


l.insertNodeAtTail(1);

l.insertNodeAtTail(5);

l.insertNodeAtTail(10);

l.insertNodeAtTail(15);

l.insertNodeAtTail(20);

l.printList();


console.log(l.kthNodeFromLinkedListEnd(3)); //10

console.log(l.kthNodeFromLinkedListEndByReversal(1)); //20

console.log(l.kthNodeFromLinkedListEndByTwoPointer(2)); //15