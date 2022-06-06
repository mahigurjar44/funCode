const fiboWorking=(n)=>{
    if(n<=2)
    return 1;
    else
    return fiboWorking(n-1)+fiboWorking(n-2);
}

const fiboBetter=(n,setHash={})=>{
    if(setHash[n]) return setHash[n]
    if(n<=2)
    return 1;
    else{
        setHash[n]=fiboBetter(n-1,setHash)+fiboBetter(n-2,setHash);
        return setHash[n];
    }
}

console.log(fiboWorking(7));
console.log(fiboWorking(19));
console.log(fiboWorking(13));


console.log(fiboBetter(7));
console.log(fiboBetter(19));
console.log(fiboBetter(13));