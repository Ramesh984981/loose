// const fs = require('fs');

// fs.readFile("demo.txt",'utf8',(err,data)=>{

//     if(err){
//         console.log(err);
//     }
//     console.log(err);
// })

// fs.writeFile('example.html','utf8',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file created successfully');
// })


// const contentSample =  'My name is kalyan,iam creating dynamic content '
 
// fs.rename('example.html',"newChangedfile.js",(err) => {
//     if(err){
//         console.log(err)
//     } else{
//         console.log("modified success");
//     }
// })


// const http = require('http')

// const myserver= http.createServer((request,response) =>{
//     response.write("welcome to Server")
//     response.end()

// })
// myserver.listen(5500)


// const fs = require('fs');

// fs.readFile('demo.txt','utf8',(err,data)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })



// const http = require('http')

// const myserver= http.createServer((request,response) =>{
//     response.write("welcome to Server")
//     response.end()

// })
// myserver.listen(5500)

const http = require('http')

const {addNumber,subtractNumber,divideNumber,multiplyNumber}  = require('./module')  

// const myserver = http.createServer((req,res)=>{
//     response.write("welcome ramesh")
//     res.end()
// })
// myserver.listen(5500);

console.log(addNumber(10,11));
console.log(subtractNumber(10,11));
console.log(multiplyNumber(10,11));
console.log(divideNumber(10,11));