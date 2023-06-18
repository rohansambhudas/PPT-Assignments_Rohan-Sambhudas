// **Question 6**

// Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

// Only following standard operations are allowed on queue.

// - **enqueue(x) :** Add an item x to rear of queue
// - **dequeue() :** Remove an item from front of queue
// - **size() :** Returns number of elements in queue.
// - **front() :** Finds front item.

function reverseFirstK(queue, k) {
    const stack = [];
    
    // Dequeue the first k elements and push them to the stack
    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }
    
    // Enqueue the elements from the stack back to the queue
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
    
    // Move the remaining elements after the reversed elements
    for (let i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
    
    return queue;
  }
  
  // Queue implementation
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  const k = 3;
  const reversedQueue = reverseFirstK(queue, k);
  console.log(reversedQueue.front()); // Output: 3  