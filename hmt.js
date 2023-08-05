var readlinesync = require("readline-sync");
let day= readlinesync.question("eneter the number of elements :");
let dayconverted = parseInt(day)

switch(dayconverted){
    case 1:
        console.log("monday");
        break; 
        case 2:
        console.log("thusday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thursday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
         console.log("saturday");
         break;
         case 7:
          console.log("sunday");
          break;
          case 8:
            console.log("undifine");
           break;    
         }
