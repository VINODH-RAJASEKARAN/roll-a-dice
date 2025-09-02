console.log("Start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ user: "vinodh@yopmail.com"})
        }, 3000)
    });
}

function getUserVideos(userEmail) {
    console.log(userEmail);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3", "video4"])
        }, 2000)
    });
}

function getVideoDetail(video) {
    console.log(video);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Detail of th getVideoDetail of video 1")
        }, 2000)
    });
}


//Architecture of calling one after another
// loginUser("vinodh", "pass")
// .then(userEmail => getUserVideos(userEmail))
// .then(result => getVideoDetail(result[0]))
// .then(detail => console.log(detail));

//Architecture of calling all and geting result once all the function got result
// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting data from youtube');
//         resolve({videos : [1,2,3,4,5]})
//     }, 1000)
// })
// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting stuff from facebook');
//         resolve({user : 'User Blah Blah'})
//     }, 2000)
// })

// Promise.all([yt, fb]).then(result => console.log(result));

// Executing in asyn call in sync manner one after another
async function displayVideoDetails() {
    try{
        const loggedUser = await loginUser("vinodh", "pass");
        const videos = await getUserVideos(loggedUser.user);
        const details = await getVideoDetail(videos[0]);
        console.log(details);
    } catch(err) {
        console.log('some error in async call');
    }
}

displayVideoDetails();

console.log("End");
//Promise
/*
const promise = new Promise((resolve, reject) =>{
    console.log("I am inside promise getting user");
    setTimeout(() => {
        resolve({ user: "vinodh"})
        //reject("err");
    }, 2000)
})

promise
.then(result => console.log(result))
.catch(result => console.log(result));
*/

/*
const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);


//logger.js
const EventEmitter = require('events')
class Logger extends EventEmitter {

    log(message) {
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://'})
    }
}

module.exports = Logger;

//app.js
const Logger = require('./logger');
const logger = new Logger();
logger.log('This is sample message');

//Register a listener
logger.on('messageLogged', (arg){
    console.log('Listener called', arg);
});
*/
/*
const fs = require('fs')
const readStream = fs.createReadStream('./docs/blog.txt', { encoding : 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog2.txt')

readStream.pipe(writeStream)

readStream.on('data', (chunk) => {
    console.log(chunk)
    writeStream.write(chunk)
})

// Read file async
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) console.log(err)
    else{
        console.log(data.toString())
        //writeDataInFile('./docs/blog1.txt', data.toString())
        //createAssetDirectory('./docs/assets/', data.toString())
        validateAndDeleteDirectory('./docs/assets/', data)
    }
})

//Write a file
const writeDataInFile = (fileName, data) => {
    fs.writeFile( fileName, data, (err) => {
        if(err) console.log(err)
        else{
            console.log("File written successs")
        }
    })
}

//Create dir
const createAssetDirectory = (strDirectory, data) => {
    if(!fs.existsSync(strDirectory)){
        fs.mkdir(strDirectory, (err) => {
            if(err) console.log(err)
            else {
                console.log("Directory created successs")
                writeDataInFile(strDirectory + 'blog1.txt', data)
            }
        })
    } 
}

//Delete directory
const validateAndDeleteDirectory = (strDirectory, data) => {
    if(fs.existsSync(strDirectory)){
        fs.readdir(strDirectory, (err, fileNames) => {
            if(err) { 
                console.log(err) 
                deleteDirectory(strDirectory)
            }
            else {
                deleteFilesInDirectoryIfNotEmpty(fileNames, strDirectory)
            }
        })
    }
}

const deleteDirectory = (strDirectory) => {
    if(fs.existsSync(strDirectory)){
        fs.rmdir(strDirectory, (err) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Folder deleted successs")
            }
        })
    }
}

//Check directory is empty and Delete Directory or files in directory
const deleteFilesInDirectoryIfNotEmpty  = (fileNames, strDirectory)  => {
    fileNames.forEach((element, index) => {
        console.log(`Current index: ${index}`);
        console.log(element);
        fs.unlink(strDirectory + element, (err) => {
            if(err) {
                console.log(err)
                return
            }
            else {
                console.log("Files in list deleted in directory successs")
            }
        })
    });
    setTimeout(() => {
        deleteDirectory(strDirectory)
    }, 3000)           
}

//const os = require('os')
//console.log(os.arch(), os.platform(), os.homedir(), os.hostname(), os.freemem(), os.totalmem())

console.info(myName)
console.error(myName)
console.debug(myName)

const greet = (myName) => {
    console.log(`My name is : ${myName}`)
    console.log(`My Dir is : ${__dirname}`)
    console.log(`My Dir is : ${__filename}`)
    //My Dir is : C:\Users\vinodh.rajasekaran\Downloads\nodejs\Test\node-server-work
    //My Dir is : C:\Users\vinodh.rajasekaran\Downloads\nodejs\Test\node-server-work\test.js
    setTimeout(() => {
        console.log('Inside the setTimeout() method')
        clearInterval(myInterval)
    }, 3000)
    console.log(global)
}

const myInterval = global.setInterval(() => {
    console.log('Inside the setInterval() method')
}, 1000)
greet("Meow")
*/