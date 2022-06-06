
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
    const res = Array(num_people).fill(0)
    let qty = 1
    let i = 0
    while(candies) {
        if (i === res.length) i = 0
        
        if ( qty <= candies) {
            res[i] += qty
            candies -= qty
            qty++
        } else {
            res[i] += candies
            candies = 0
        }
        i++
    }
    return res
    
};
console.log(distributeCandies(88,8));