
// Wrapper/Decorator 'Class' Constructor
var LinkedList = function(linkedListNode) {
  this.list = linkedListNode;
};

LinkedList.prototype.append = function(value){
  this.list.append(value);
};

LinkedList.prototype.prepend = function(value) {
  this.list = new LinkedListNode(value, this.list);
}

// Main LinkedList 'Class' Constructor
var LinkedListNode = function LinkedListNode(value, next){
  // Fill me in
  this.value = value;
  this.next = next;
};

LinkedListNode.prototype.append =function(value) {
  if (this.next === undefined) {
    this.next = new LinkedListNode(value);
  } else {
    this.next.append(value);
  }
};

LinkedListNode.prototype.prepend = function(value) {
  return new LinkedListNode('xyz', this);
};


var myLinkedList = new LinkedListNode('abc');
myLinkedList.append('def');
myLinkedList.append('ghi');


var myNewList = myLinkedList.prepend('xyz');

var myLL = new LinkedList(new LinkedListNode('abc'));
myLL.append('def');
myLL.append('ghi');
myLL.prepend('xyz');





























