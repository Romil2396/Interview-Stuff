const fs = require('fs');


const readFileData = () => { // Javascript ES6
   return new Promise((resolve, reject) => {
      fs.readFile('file1.txt', 'utf8', (err, data) => {
         if(!err) {
             resolve(data);
         }
         reject(err)
      });
   });
}

// function readFileData ()  { // Javascript ES5

// }

const mainFunction = () => {
    readFileData().then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })
}

mainFunction();