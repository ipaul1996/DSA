class Node
{
    constructor(element) {
        this.data=element;
        this.next=null;
    }
}

//Whenever we create an object to Node class constructor got executed and modifies the object. So, whenevr we will create an object it will have two properties with keys, data and next respectively.
//whenever any node is created its 'next' property value is null. 
class LinkedList 
{
    constructor() {
        this.head=null;
    }


    //Method for printing all the elements of the linked list
    printList() {
       var current=this.head;
       if(current===null) {
          console.log('List is Empty');
          return;
       }
       while(current !== null) {
          console.log(current.data);
          current=current.next;
       }

    }


    //Method for inserting a node at the tail or end
    insertNodeAtTail(element) {
      var node = new Node(element);
      var current;
      if(this.head === null) {  //Initially the list is empty
        this.head=node;
      } else {                //If list contains any node then add at the end
          current=this.head;
          while(current.next !== null) {
              current=current.next;
          }
          current.next=node;
      }
      return this.head;
    }
   

    //Method for inserting a node at the head or begining
    insertNodeAtHead(element) {
      var node = new Node(element);
      var current;
      if(this.head === null) {
         this.head=node;
      } else {
        node.next=this.head;
        this.head=node;
      }
      return this.head;
    }

    //Method for inserting a node after a particular element
    insertNodeAfterParticularElement(element,pelement) {
      var node = new Node(element);
      var current = this.head;
      while(current.data!==pelement) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      return this.head;
    }


    //Method for inserting a node before a particular element
    insertNodeBeforeParticularElement(element,pelement) {
      var node = new Node(element);
      var current = this.head;
      var pcurrent = null;
      while(current.data !== pelement) {
        pcurrent = current;
        current = current.next; 
      }
      node.next=current;
      pcurrent.next=node;
      return this.head;
    }

    //Method for checking a node is present in a Linkedlist or not
    checkNodePresent(element) {
      var current = this.head;
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

}

var l1=new LinkedList();
console.log(l1);
//Whenever we create an object(i.e., an instance) to the LinkedList class that object will have a property with key head and value null. Whatver method is defined inside the class can be accessed as a method of the object.In other words, this object inherit all these methods.
l1.insertNodeAtTail(10); 
l1.insertNodeAtTail(20);
l1.insertNodeAtTail(30);
l1.insertNodeAtTail(40);

//Observation:
//LinkedList-->head(a property initially has null value)--->Node{data:10, next:Node{data:20,next:Node{data:30,next:Node{data:40,next:null}}}}
//LinkedList is an object having a single property with key head and value null(initially when created) or a Node object.
//Node is an object with two properties data and next. next has a value null(initially when created) or another Node object.

// l1.printList();

l1.insertNodeAtHead(5);
l1.insertNodeAtHead(8);

l1.insertNodeAfterParticularElement(25,20);
l1.insertNodeBeforeParticularElement(35,40);
l1.printList();

l1.checkNodePresent(35); //Node is present in the list
l1.checkNodePresent(55); //Node is not present in the list
