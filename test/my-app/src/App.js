import logo from './logo.svg';
import './App.css';
import Home from "./Home";

function App() {
	var worker;
	var message = 'Hello';
	console.log("I am inside function App()");
	if (window.Worker) {
		// Creating new web worker using constructor
		worker = new Worker('worker.js');
		console.log("I am inside window.Worker");

		// Sending the message using postMessage
		worker.postMessage(message);

		// On response
		worker.onmessage = function(e) {
			console.log(e.data);
		};

		worker.onerror = function(event) {
			console.log(event.message, event);
		};
	} else {
		alert("Not supported....");
	}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
