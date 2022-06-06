class set{
    constructor(){
        this.collection=[]
    }
    has(value){
        return (this.collection.indexOf(value)!==-1)
    }
    value(){
        return this.collection;
    }
    add(value){
        if(!this.has(value)){
            this.collection.push(value);
            return true;
        }
        return false;
    }
    revome(value){
        if(!this.has(value)){
            let index= this.collection.indexOf(value);
            this.collection.splice(index,1)
            return true;
        }
        return false
    }
    size(){
        return this.collection.length;
    }

}

let mySet = new set();
mySet.add("m");
mySet.add("a");
mySet.add("h");
mySet.add("i");
mySet.add("a");
console.log(mySet.has('a'));
console.log(mySet.revome("a"))
console.log(mySet.size());
console.log(mySet.value('a'));
mySet.add("a");
console.log(mySet.has('a'));