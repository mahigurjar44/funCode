class queue{
    constructor(){
        this.queue=[];
    }
    value(){
        return this.queue;
    }
    enqueue(value){
        if(this.isEmpty()){
            this.queue.push(value);
            return true;
        }else{
            for(let key=0; key<this.queue.length;key++){
                if(this.queue[key] && value[1] && this.queue[key][1]>value[1]){
                    this.queue.splice(key,0,value);
                    return true
                }
            }
            this.queue.push(value);
            return true;
        }
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
myQueue.enqueue(["m",2]);
myQueue.enqueue(["a",2]);
myQueue.enqueue(["h",1]);
myQueue.enqueue(["i",1]);
myQueue.enqueue(["a",9]);
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue())
console.log(myQueue.size());
console.log(myQueue.value());
myQueue.enqueue(["a",1]);
console.log(myQueue.isEmpty());
console.log(myQueue.value());