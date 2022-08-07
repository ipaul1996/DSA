//Checking if a Singly Linked List is palindrome or not


//Doubt in check palindrome by reveresal
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

    //Checking if a SLL is palindrome or not by reversing it
    checkPalindromeByReversal() {

        if(this.head === null || this.head.next === null) {

            console.log('List is a Palindrome');

            return;

        }

        let object = JSON.parse(JSON.stringify(this));

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

        let temp1 = this.head;

        let temp2 = object.head;

        while(temp1 !== null) {

            if(temp1.data !== temp2.data) {

                console.log('List is not a Palindrome');

                return;
            }

            temp1 = temp1.next;

            temp2 = temp2.next;
        }

        console.log('List is a Palindrome');
    }

    //Doubt
    // checkPalindrome() {

    //   let middleNode = this.middleNodeLinkedList();

    //   console.log(middleNode.data);

    //   let secondHalfHead = middleNode.next;

    //   function reverse(head) {
         
    //     let prev = head;

    //     let current = prev.next;

    //     let post = current.next;

    //     while(post !== null) {

    //         current.next = prev;

    //         prev = current;

    //         current = post;

    //         post = post.next;

    //     }

    //     current.next = prev;

    //     head.next = null;

    //     head = current;

    //     return head;


    //   }

    //   secondHalfHead = reverse(secondHalfHead);
      
    //   let temp = this.head;

    //   while(temp.next !== middleNode) {


    //   }


    //   this.printList();

    // }


    middleNodeLinkedList() {

        if(this.head === null || this.head.next === null || this.head.next.next === null) {

            return;
        }

        let fast = this.head;

        let slow = this.head;

        while(fast !== null && fast.next !== null) {

            fast = fast.next.next;

            slow = slow.next;

        }

        return slow;
    }

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


}

let l1 = new LinkedList();

l1.insertNodeAtTail(5);

l1.insertNodeAtTail(10);

l1.insertNodeAtTail(15);

l1.insertNodeAtTail(10);

l1.insertNodeAtTail(25);

l1.insertNodeAtTail(35);

l1.insertNodeAtTail(45);

l1.insertNodeAtTail(55);

l1.insertNodeAtTail(65);

l1.printList();

console.log('********');

// l1.checkPalindromeByReversal();

l1.checkPalindrome()

// l1.reverseLinkedList(l1);





