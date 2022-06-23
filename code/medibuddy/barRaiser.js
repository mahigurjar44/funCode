

/*


You are given list of strings. And you need group the list of strings such that the words in each group is anagram

Input ["abc","def","bca","edd"]

Output [["abc","bca"], ["def"],
["edd"]]


*/

(function main() {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  var solution = function(s) {
    // write your solution here..
    
    let sortstring=s;
    let result=[[]];
    let i=0;
    let temp=[],temp2=[];
    for(let word of s){
        temp=[];
        if(temp2.indexOf(word) < 0){
            temp.push(word);
        }
        temp2.push(word);
        for(let word1 of sortstring){
            if(word.split('').sort().join('')===word1.split('').sort().join('')  && temp2.indexOf(word1) < 0){
                temp.push(word1);
                temp2.push(word1);
            }
        }
        if(temp && temp[0]){
            result[i]=temp;
            i++;
        }
    }
    return result;
    
  };
 
  var n, k;
  r1.on("line", (input) => {
    n = ["abc","def","bca","edd"];
  }).on("close", () => {
    console.log(solution(n));
  });
})();
