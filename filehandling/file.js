const fs = require('fs');

const os = require('os');

console.log(os.cpus());
//syncc...
//fs.writeFileSync('./test.txt','Hello Rakesh')

//fs.writeFile('./test.txt','Hello Rakesh Async',(err) => {})

/*
const result = fs.readFileSync('./contacts.txt','utf-8')
console.log(result);
*/

/*
fs.readFile('./contacts.txt',"utf-8",(err,result) => {
    if (err) {
        console.log("Error",err);
    } else {
        console.log(result);
    }
})
*/

fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());

fs.cpSync('./test.txt','./coppy.txt')
//fs.unlinkSync('./copy.txt')

console.log(fs.statSync('./test.txt'));
