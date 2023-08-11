var readlinesync = require("readline-sync");
let number=readlinesync.question("eneter the number :");
let  num=parseInt(number)
  for(let i=1; i<=num;i++){
    if(i==3){
    break;
  }
  console.log(i);
  }