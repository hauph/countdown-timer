import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render((
    <HashRouter>
        <Route path='/' component={App}/>
        {/* <App /> */}
    </HashRouter>
    ), document.getElementById('root')
);
registerServiceWorker();
