//FIFO
//enqueue
/***
 * enqueue
 * dequeue
 * peek()
 * isEmpty()
 * size()
 * 2,5,3,6
 */
class Queue {
   constructor() {
      this.data = [];
   }
   //enqueue
   enqueue(element) {
      this.data.push(element);
   }
   //dequeue
   dequeue() {
      if (this.isEmpty()) {
         return "underflow";
      }
      return this.data.shift(); //remove dat
   }

   isEmpty() {
      return this.data.length === 0;
   
      
   }


}
