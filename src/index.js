import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // I have renamed BrowserRouter to Router using 'as' here so that it is easy to understand
import { Provider } from 'react-redux'; //I have imported Provider here so that I can make the state available for the entire app
import store from './store/index'; //imported since it stores the state of the application


ReactDOM.render(    
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    ,document.getElementById('root'));

