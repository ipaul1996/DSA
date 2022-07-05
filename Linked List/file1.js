class Node
{
    constructor(element) {
        this.data=element;
        this.next=null;
    }
}

//Whenever we create an object to Node class constructor got executed and mofifies the object. So, whenevr we will create an object it will have two properties with keys, data and next respectively.
//whenever any node is created its 'next' property value is null. 
class LinkedList 
{
    constructor() {
        this.head=null;
    }

    add(element) {
      var node = new Node(element);
      var current;
      if(this.head===null) {  //Initially the list is empty
        this.head=node;
      } else {                //If list contains any node then add at the end
        current=this.head;
        while(current.next !==null) {
            current=current.next;
        }
        current.next=node;
      }
    }
}

var l1=new LinkedList();
console.log(l1);
//Whenever we create an object(i.e., an instance) to the LinkedList class that object will have a property with key head and value null. Whatver method is defined inside the class can be accessed as a method of the object.
l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);
console.log(l1);

//Observation:
//LinkedList-->head(a property initially has null value)--->Node{data:10, next:Node{data:20,next:Node{data:30,next:Node{data:40,next:null}}}}
//LinkedList is an object having a single property with key head and value null(initially when created) or a Node object.
//Node is an object with two properties data and next. next has a value null(initially when created) or another Node object.