import React, { Component } from "react";



class Home extends Component {
  constructor(props) {
    super(props);

 
  }

  fetchUsers = () => {
    
  };

  fetchWebWorker = () => {
    console.log("asdasd");
  };

  componentDidMount = () => {
    
  };

  render() {
    return (
      
          <button className="btn-worker" onClick={this.fetchWebWorker}>
            Fetch Users with Web Worker
          </button>

    );
  }
}

export default Home;