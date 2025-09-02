/* Event Emmiter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('event_listner', (num1, num2)=>{
    console.log(num1+num2);
});
eventEmitter.emit('event_listner',2,3);
*/
/* Custom Event Emmiter
class Person extends EventEmitter {
    
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }

    get name1(){
        return this._name;
    }

}

let vinodh = new Person('Vinodh');
let shreya = new Person('Shreya');

vinodh.on('name', ()=>{
    console.log(vinodh.name);
});
shreya.on('name1', ()=>{
    console.log(shreya.name1);
});

vinodh.emit('name');
shreya.emit('name1');
*/

/*
ReadLine Console input
const { stdin, stdout } = require('process');
const readLine =  require('readline');
const r1 = readLine.createInterface({input : stdin, output : stdout});
let num1 = Math.floor(Math.random()*10+1);
let num2 = Math.floor(Math.random()*10+1);
let answer = num1 + num2;

r1.question(`What is the ouptut of ${num1} + ${num2}?\n`,
(userInput)=>{
    if(userInput.trim() == answer){
        r1.close();
    } else {
        r1.setPrompt(`your answer '${userInput.trim()}' is In-correct please try again\n`);
        r1.prompt();
        r1.on('line', (userInput)=> {
            if(userInput.trim() == answer){
                r1.close();
            } else {
                r1.setPrompt(`your answer '${userInput.trim()}' is In-correct please try again\n`);
                r1.prompt();
            }
        });
    }
});
r1.on('close', ()=>{
    console.log('Correct answer');
});
*/

const fs = require('fs');
//create a file
/*
fs.writeFile('example1.txt', "This is a example",(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('File created successfully');
    }
});
*/
//Read a file
/*
fs.readFile('example1.txt', 'utf8',(err, file) => {
    if(err){
        console.log(err);
    } else {
        console.log(file);
    }
});
*/
//Rename a file
/*
fs.rename('example1.txt', 'example2.txt',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Successfully renamed');
    }
});
*/

//Append a file
/*
fs.appendFile('example2.txt', 'Some more data is appended',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Successfully appended data to a file');
    }
});
*/

//Delete a file
/*
fs.unlink('example1.txt',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Deleted successfully ');
    }
});
*/

//Create a folder
/*
fs.mkdir('sample',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Folder created successfully ');
    }
});
*/

//Remove a folder
/*
fs.rmdir('sample',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Deleted successfully ');
    }
});
*/

//Create a folder and a file inside and read
/*
fs.mkdir('sample',(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Folder created successfully ');
        fs.writeFile('./sample/example1.txt', "This is a example",(err) => {
            if(err){
                console.log(err);
            } else {
                console.log('File created successfully');
                fs.readFile('./sample/example1.txt', 'utf8',(err, file) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log(file);
                    }
                });
            }
        });
    }
});
*/

//Remove all files in a folder and delete the folder
/*
fs.readdir('sample',(err, files) => {
    if(err){
        console.log(err);
    } else {
        if(files!=null && files.length>0){
            for(let i=0; i<files.length; i++){
                fs.unlink('./sample/'+files[i],(err) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Deleted successfully ');
                    }
                });
            }
        }
        fs.rmdir('sample',(err) => {
            if(err){
                console.log(err);
            } else {
                console.log('Deleted successfully ');
            }
        });
        console.log('Deleted successfully ');
    }
});
*/

//Read and Write a file using stream chuks
/*
const readStream = fs.createReadStream('example1.txt', 'utf8');
//const writeStream = fs.createWriteStream('example2.txt');

readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
    console.log(chunk);
});
*/

//Read and Write a file using chuks by easy peasy pipe and compress
/*
const zlib = require('zlib');
// const readStream = fs.createReadStream('./example2.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./exampleUnzipped.txt');

// const gzib = zlib.createGzip();
const gUnzib = zlib.createGunzip();
// readStream.pipe(gzib).pipe(writeStream);
readStream.pipe(gUnzib).pipe(writeStream);
*/