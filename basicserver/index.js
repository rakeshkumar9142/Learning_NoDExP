const http = require('http');
const { send } = require('process');
const fs = require('fs');

const myServer = http.createServer((req,res) => {
   // console.log("New req rec..");
    const log = `${Date.now()} : new req rec\n`;
    fs.appendFile('log.txt',log,(err,data) => {
        res.end("Hello from server Again")
    })
})

myServer.listen(8000,() => {
    console.log('server started');
});