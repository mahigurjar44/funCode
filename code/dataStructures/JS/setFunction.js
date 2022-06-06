let set=function(){
   //constructor(){
        this.collection=[]
   // }
    this.has=(value)=>{
        return (this.collection.indexOf(value)!==-1)
    }
    this.value=()=>{
        return this.collection;
    }
    this.add=(value)=>{
        if(!this.has(value)){
            this.collection.push(value);
            return true;
        }
        return false;
    }
    this.revome=(value)=>{
        if(!this.has(value)){
            let index= this.collection.indexOf(value);
            this.collection.splice(index,1)
            return true;
        }
        return false
    }
    this.size=()=>{
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