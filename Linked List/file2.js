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


    printList() {

        let current = this.head;

        if(current === null) {

            console.log('List is Empty');

        } else {

            while(current !== null) {

                console.log(current.data);

                current = current.next;

            }
        }

    }


    insertNodeatTail(element) {

        let node = new Node(element);

        if(this.head === null) {

            this.head = node;

        } else {

            let current;

            current = this.head;

            while(current.next !== null) {

                current = current.next;

            }

            current.next = node;

        }

        return this.head;

    }



    insertNodeatHead(element) {

        let node = new Node(element);

        if(this.head === null) {

            this.head = node;

        } else {

            node.next = this.head;

            this.head = node;

        }

        return this.head;

    }


    insertNodeAfterParticularElement(element, pelement) {

        let node = new Node(element);

        let current = this.head;

        while(current.data !== pelement) {

            current = current.next;

        }

        node.next = current.next;

        current.next = node;

        return this.head;

    }
    

    insertNodeBeforeParticularElement(element, pelement) {

        let node = new Node(element);

        let current = this.head;

        let pcurrent = null;

        if(current.data === pelement) {

            node.next = current;

            this.head = node;

            return this.head;
        }

        while(current.data !== pelement) {

            pcurrent = current;

            current = current.next;

        }

        node.next = current;

        pcurrent.next = node;

        return this.head;

    }


    checkNodePresent(element) {

        let current = this.head;

        if(current === null) {

            console.log('Node is not present in the list');

            return;

        } 

        while(current.data !== element) {
            
            current = current.next;

            if(current === null) {

                console.log('Node is not present in the list');

                return;
            }

        }

        console.log('Node is present in the list');

    }



    deleteNodeatHead() {

        let current = this.head;

        this.head = current.next;

        return this.head;

    }

                                                                                                                                                           
    deleteNodeatTail() {

        let current = this.head;

        let pcurrent = null;

        while(current.next !== null) {

            pcurrent = current;

            current = current.next;
        }

        pcurrent.next = null;

        return this.head;
    }


    deleteParticularNode(element) {

        let current = this.head;

        let pcurrent = null;

        if(current.data === element) {

            current = current.next;

            this.head = current;

            return this.head;
        }

        while(current.data !== element) {

            pcurrent = current;

            current = current.next;

        }

        pcurrent.next = current.next;

        return this.head;

    }


    deleteBeforeParticularNode(element) {

        let current = this.head;

        let pcurrent = null;

        let ppcurrent = null;

        if(current.next.data === element) {

            this.head = current.next;

            return this.head;
        }

        while(current.data !== element) {

            ppcurrent = pcurrent;

            pcurrent = current;

            current = current.next;

        }

        ppcurrent.next = current;

        return this.head;

    }

}



let l1 = new LinkedList();

console.log(l1);

l1.insertNodeatHead(5);

l1.insertNodeatHead(10);

l1.insertNodeatHead(15);

l1.insertNodeatTail(20);

l1.insertNodeatTail(25);


l1.insertNodeAfterParticularElement(17,25);

l1.insertNodeBeforeParticularElement(13,15);

l1.insertNodeBeforeParticularElement(11,13);

l1.printList();

l1.checkNodePresent(2);

l1.checkNodePresent(15);

l1.deleteNodeatHead();

l1.deleteNodeatHead();

l1.printList();

l1.deleteNodeatTail();

l1.deleteNodeatTail();

l1.deleteNodeatTail();

console.log('*********');

l1.deleteParticularNode(15);

l1.deleteParticularNode(5);

l1.printList();


console.log('********************************');

let l2 = new LinkedList();

l2.insertNodeatTail(1);
l2.insertNodeatTail(2);
l2.insertNodeatTail(3);
l2.insertNodeatTail(4);
l2.insertNodeatTail(5);

l2.printList();

l2.deleteBeforeParticularNode(2);
l2.deleteBeforeParticularNode(3);

l2.printList();









