import React from 'react';
import ReactDOM from 'react-dom';

import Header from './js/Header';
import CheckCard from './js/CheckCard';

const App = () => (
  <div className="container mx-auto p-4">
    <div className="flex flex-col">
      <Header />
      <CheckCard checking={true} valid={false} invalid={false} />
      <CheckCard checking={false} valid={false} invalid={false} />
      <CheckCard checking={false} valid={true} invalid={false} />
      <CheckCard checking={false} valid={false} invalid={true} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}