/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let lenth=flowerbed.length;
    for(let i=0;i<lenth;i++){
        if(i==0 && flowerbed[i+1]==0 && flowerbed[i]==0){
                n--;
            flowerbed[i]=1
        }
         if((i+1)==lenth && flowerbed[i-1]==0 && flowerbed[i]==0){
                n--;
              flowerbed[i]=1
        }
        if(lenth==i+1 && flowerbed[i]==0 && lenth==1){
            n--;
            flowerbed[i]=1;
        }
        
        if(i!=0 && (i+1) !=lenth && flowerbed[i]==0){
            if(flowerbed[i+1]==0 && flowerbed[i-1]==0){
                 n--;
                flowerbed[i]=1
                console.log("arr",flowerbed)
            }      
        }
        if(n<=0){
            break;
        }
    }
    console.log("n",n)
    return (n>0)?false:true;
};

console.log(canPlaceFlowers([0],1));