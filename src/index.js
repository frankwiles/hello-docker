import React from 'react';
import ReactDOM from 'react-dom';

import Header from './js/Header';

const App = () => (
    <div className="container mx-auto p-4">
        <div className="flex flex-col">
            <Header />
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}