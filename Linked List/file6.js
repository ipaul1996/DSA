//Delete node without head

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    
    let current = node;
    
    let prev = null;
    
    while(current.next !== null) {
        
        let temp = current.next.data;
        
        current.next.data = current.data
        
        current.data = temp;
        
        prev = current;
        
        current = current.next;
    }
    
    prev.next = null;
    
    return node;
}