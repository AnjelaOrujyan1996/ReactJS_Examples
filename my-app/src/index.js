import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Layout from './hoc/Layout/Layout'

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/test' component={Layout}/>
        </div>
    </Router>,
    document.getElementById('root')

);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
