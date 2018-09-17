import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < Routes / > , document.getElementById('root'));
registerServiceWorker();