const gridTraveler=(a,b) => {
    if(a ==0 || b==0) return 0;
    if(a==1 && b==1) return 1;
    return gridTraveler(a-1,b)+gridTraveler(a,b-1);
}

const gridTravelerBetter=(a,b,momo={}) => {
    if(momo[a+'_'+b]) return momo[a+'_'+b];
    if(momo[b+'_'+a]) return momo[b+'_'+a];
    if(a ==0 || b==0) return 0;
    if(a==1 && b==1) return 1;
    momo[a+'_'+b]=gridTravelerBetter(a-1,b,momo)+gridTravelerBetter(a,b-1,momo);
    return momo[a+'_'+b];
}

console.log(gridTraveler(2,3))
console.log(gridTraveler(3,5))
console.log(gridTraveler(5,6))
console.log(gridTraveler(1,1))


console.log(gridTravelerBetter(2,3))
console.log(gridTravelerBetter(3,5))
console.log(gridTravelerBetter(5,6))
console.log(gridTravelerBetter(1,1))