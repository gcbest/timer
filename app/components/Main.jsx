import React, {Component} from 'react';
import Nav from './Nav';

const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="column medium-6 large-4 small-centered">
                	<Nav/>
                    Main Component
                    {props.children}
                </div>
            </div>
        </div>

    );
};

export default Main;