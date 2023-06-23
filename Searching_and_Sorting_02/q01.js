// 1. **Merge k Sorted Lists**

// You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

// *Merge all the linked-lists into one sorted linked-list and return it.*

// **Example 1:**

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6


// Example 2:

// Input: lists = []
// Output: []


// Example 3:

// Input: lists = [[]]
// Output: []


// **Constraints:**

// - `k == lists.length`
// - `0 <= k <= 10000`
// - `0 <= lists[i].length <= 500`
// - `-10000 <= lists[i][j] <= 10000`
// - `lists[i]` is sorted in **ascending order**.
// - The sum of `lists[i].length` will not exceed `10000`.

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKLists(lists) {
    // Create a min-heap
    const heap = new MinHeap();
  
    // Add the first node from each list to the heap
    for (const list of lists) {
      if (list) {
        heap.insert(list);
      }
    }
  
    // Create a dummy node as the starting point of the merged list
    const dummy = new ListNode();
    let current = dummy;
  
    // Merge the lists until the heap is empty
    while (!heap.isEmpty()) {
      // Get the node with the smallest value from the heap
      const minNode = heap.extractMin();
  
      // Add the node to the merged list
      current.next = minNode;
      current = current.next;
  
      // Move to the next node in the list
      if (minNode.next) {
        heap.insert(minNode.next);
      }
    }
  
    return dummy.next;
  }
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    insert(node) {
      this.heap.push(node);
      this.bubbleUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      this.swap(0, this.heap.length - 1);
      const minNode = this.heap.pop();
      this.bubbleDown(0);
      return minNode;
    }
  
    bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
  
      if (parentIndex >= 0 && this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex, index);
        this.bubbleUp(parentIndex);
      }
    }
  
    bubbleDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex].val < this.heap[smallestIndex].val
      ) {
        smallestIndex = leftIndex;
      }
  
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex].val < this.heap[smallestIndex].val
      ) {
        smallestIndex = rightIndex;
      }
  
      if (smallestIndex !== index) {
        this.swap(smallestIndex, index);
        this.bubbleDown(smallestIndex);
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }  


let arr = [[]]
console.log(mergeKLists(arr))