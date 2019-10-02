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

  checkSite(stateVar, url) {
    console.log(stateVar)
    this.setState({ [stateVar]: CHECKING });
    sleep(750).then(
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      }).then((response) => {
        console.log(url)
        console.dir(response)
        if (response.ok) {
          this.setState({ [stateVar]: VALID })
        }
        else {
          this.setState({ [stateVar]: INVALID })
        }
      }).catch(() => {
        this.setState({ [stateVar]: INVALID })
      })
    )
  }

  componentDidMount() {
    console.log('=== Starting Checks ===')

    // First
    setTimeout(() => {
      console.log("- First Check")
      this.setState({ connection: CHECKING })
      sleep(750).then(() => {
        if (window && window.navigator.onLine) {
          this.setState({ connection: VALID })
        }
        else {
          this.setState({ connection: INVALID })
        }
      })
    }, 1000);

    // Second
    setTimeout(() => {
      console.log("- Second Check")
      this.checkSite('pypi', 'https://pypi.org/pypi/requests/json')
    }, 2000);
    // Third
    setTimeout(() => {
      console.log("- Third Check")
      this.checkSite('npm', 'https://api.npmjs.org/downloads/point/last-day')
    }, 3000);
  }

  render() {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col">
          <Header />
          <CheckCard state={this.state.connection} message="Internet Connection" />
          <CheckCard state={this.state.pypi} message="Python Packages - pypi.org" />
          <CheckCard state={this.state.npm} message="Javascript Packages - npmjs.org" />
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