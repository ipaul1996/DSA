//Detect cycle in SLL

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next!==null) {
        
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow) {
            
            return true;
        }
    }
    
    return false;
    
};
