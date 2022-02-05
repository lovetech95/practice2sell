import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';


const history = createBrowserHistory();

ReactDOM.render(
            <Router history={history} basename="/practice2sell" >
                <App/>
            </Router>,
            document.getElementById('root')
);
