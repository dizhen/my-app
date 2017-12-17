import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './Res/Style/bootstrap.css'
import './index.css';
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
