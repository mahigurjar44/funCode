class queue{
    constructor(){
        this.queue=[];
    }
    value(){
        return this.queue;
    }
    enqueue(value){
        this.queue.push(value);
        return true;
    }
    dequeue(){
        this.queue.shift();
        return true
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length==0;
    }

}

let myQueue = new queue();
myQueue.enqueue("m");
myQueue.enqueue("a");
myQueue.enqueue("h");
myQueue.enqueue("i");
myQueue.enqueue("a");
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue())
console.log(myQueue.size());
console.log(myQueue.value());
myQueue.enqueue("a");
console.log(myQueue.isEmpty());