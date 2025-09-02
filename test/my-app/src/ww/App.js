import logo from '../logo.svg';
import WorkerBuilder from './worker-builder'
import Worker from './fiboworker'

var instance = new WorkerBuilder(Worker)

function alertFunc(a) {
  //alert(a)
  // myWorker.onmessage = (m) => {
  //   console.log("msg from worker: ", m.data);
  // };
  // myWorker.postMessage('im from main');
  instance.postMessage(5)
  instance.onmessage = (message) => {
    if (message) {
      console.log("Message from worker", message.data);
    }
  };
}

function App() {

  const shoot = (a) => {
    alert(a);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World!</p>
        <button onClick={() => alertFunc("Triggered")}>Action button</button>
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

function OwnApp() {
  return (<header><p>Own App</p></header>);
}

export default App;

