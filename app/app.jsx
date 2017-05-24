import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Countdown from './components/Countdown';
import Timer from './components/Timer';

// Load foundation
// require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// require('style-loader!css-loader!applicatonStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

