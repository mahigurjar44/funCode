class  stack{
    constructor(){
        this.storeage={};
        this.count=0;
    }
    push(value){    
        this.storeage[this.count]=value;
        this.count++;
        return (this.count-1);
    }
    pop(){
        if(this.cound==0){
            return undefined;
        }
        this.count--;
        let retult=this.storeage[this.count];
        delete this.storeage[this.count];
        return retult;

    }
    size(){
        return this.count;
    }
    peek(){
        return this.storeage[this.count-1];
    }

}
let mystack= new stack();
mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
mystack.push("mahi")
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());