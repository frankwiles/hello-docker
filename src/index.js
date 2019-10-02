import React from 'react';
import ReactDOM from 'react-dom';

import Header from './js/Header';
import CheckCard from './js/CheckCard';
import { CHECKING, PENDING, VALID, INVALID } from './js/Constants';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connection: PENDING,
      pypi: PENDING,
      npm: PENDING,
      docker: PENDING,
    }
  }

  checkSite(stateVar) {
    console.log(stateVar)
    this.setState({ [stateVar]: CHECKING });
    sleep(750).then(
      this.setState({ [stateVar]: VALID })
    )
  }

  componentDidMount() {
    // First
    setTimeout(() => {
      console.log("First")
      this.checkSite('connection')
    }, 1000);
    // Second
    setTimeout(() => {
      console.log("Second")
      this.checkSite('pypi')
    }, 2000);
    // Third
    setTimeout(() => {
      console.log("Third")
      this.checkSite('npm')
    }, 3000);
    // Fourth
    setTimeout(() => {
      console.log("Fourth")
      this.checkSite('docker')
    }, 4000);
  }

  render() {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col">
          <Header />
          <CheckCard state={this.state.connection} message="Internet Connection" />
          <CheckCard state={this.state.pypi} message="Python Packages - pypi.org" />
          <CheckCard state={this.state.npm} message="Javascript Packages - npmjs.org" />
          <CheckCard state={this.state.docker} message="Docker Images - dockerhub.org" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}