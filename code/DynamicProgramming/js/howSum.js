const canSum=(a,arr) => {
    if(a == 0) return true;
    if(a < 0 ) return false;
    for(let num of arr){
        let remainder=a-num;
        if(canSum(remainder,arr))
        return true;
    }
    return false;
}

const canSumBetter=(a,arr,momo={}) => {
    if(momo[a]) return momo[a];
    if(a == 0) return true;
    if(a < 0 ) return false;
    for(let num of arr){
        const remainder=a-num;
        if(canSumBetter(remainder,arr,momo)){
            momo[a]=true;
            return true;
        }
    }
    momo[a]=false;
    return false;
}

console.log(canSum(2,[3,3,4,5,6]))
console.log(canSum(300,[7,14]))
console.log(canSum(5,[6,4,5,6]))
console.log(canSum(1,[1.0,9,8]))


console.log(canSumBetter(2,[3,3,4,5,6]))
console.log(canSumBetter(300,[7,14]))
console.log(canSumBetter(5,[6,4,5,6]))
console.log(canSumBetter(1,[1.0,9,8]))