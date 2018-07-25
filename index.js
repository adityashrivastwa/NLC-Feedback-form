import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feedback from './Feedback';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Feedback />, document.getElementById('root'));
registerServiceWorker();
