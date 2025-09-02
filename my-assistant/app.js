import "./addRequire.js";
const http = require('http')
const fs = require('fs')
import { handlePostStore } from '../../../../samples/text_generation.js';
//import { myTextGenText  } from '../text_generation.js';

const server = http.createServer(async (req, res) => {
  try {
    console.log('request made')
    console.log(req.url, req.method)

    let path = './views/'

    switch (req.url) {
      case '/':
        // console.log(req);
        // console.log(req.body);
        path += 'index.html'
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200
        fs.readFile(path, (err, data) => {
          if (err) console.log(err)
          else {
            res.write(data)
          }
          res.end()
        })
        break
      case '/load-index': // redirect
        const { headers } = req;
        const userData = decodeURI(headers['user-data']);
        console.log(userData+"\n");
        const answer = await handlePostStore(userData);
        //console.log(answer+"\n");
        //res.setHeader('Content-Type', 'application/json')
        res.setHeader('Content-Type', 'text/plain')
        res.statusCode = 200
        res.write(answer);
        res.end()
        break
      default: //404
        path += '404.html'
        res.statusCode = 404
        fs.readFile(path, (err, data) => {
          if (err) console.log(err)
          else {
            res.write(data)
          }
          res.end()
        })
        break
    }

  } catch (error) {
    console.log('Error for the request port 3000', error)
  }
})

server.listen(3000, 'localhost', () => {
  console.log('listening for the request port 3000')
})


/*
// API endpoint for creating a new user
const apiUrl = 'https://api.example.com/users';

// Form data to be sent in the request body
const formData = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'securepassword123',
};

// Make a POST request using the Fetch API
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(newUserData => {
    // Process the newly created user data
    console.log('New User Data:', newUserData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */