const fs = require("fs");
const lines = fs
  .readFileSync("/var/www/aws/Mahi/textFIles/adcentofcode/adventofcode.com_2021_day_2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => {
        var data=x.split(" ");
        return { 
                step: data[0],
                nu_step :parseInt(data[1])
            }
    });

let forward = 0;
let down=0;
console.log(lines);
for (let i = 0; i < lines.length; i++) {
  if(lines[i]['step']=='forward'){
    forward=forward+lines[i]['nu_step'];
  }
  if(lines[i]['step']=='down'){
    down=down+lines[i]['nu_step'];
  }
  if(lines[i]['step']=='up'){
    down=down-lines[i]['nu_step'];
  }
}
console.log(down*forward);

// let increased2 = 0;
 forward = 0;
 down=0;
let amiDown=0;
for (let i = 0; i < lines.length; i++) {
    if(lines[i]['step']=='forward'){
      forward=forward+lines[i]['nu_step'];
      amiDown=amiDown+down*lines[i]['nu_step'];
    }
    if(lines[i]['step']=='down'){
      down=down+lines[i]['nu_step'];
      //amiDown=amiDown+lines[i]['nu_step'];
    }
    if(lines[i]['step']=='up'){
      down=down-lines[i]['nu_step'];
      //amiDown=down;
    }
  }
  console.log("forward",forward);
  console.log("amiDown",amiDown);
  console.log("Down",down);
  console.log(forward*amiDown);