import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <strong>React Timer App</strong>
                </div>
                <div id="responsive-menu">
                    <div className="top-bar-left">
                        <ul>
                            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                            <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>Created by <a href="https://github.com/gcbest">Godfrey Best</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;