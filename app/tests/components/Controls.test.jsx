import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Controls from '../../components/Controls';

describe('Controls', () => {
    it('should exist', () => {
       expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
           var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
           var $el = $(ReactDOM.findDOMNode(controls));
           // jquery feature :contains() allows you to find a button that has the text as Pause
           var $pauseButton = $el.find('button:contains(Pause)');

           // the amount of pause buttons we find on the page should be 1
           expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            // jquery feature :contains() allows you to find a button that has the text as Pause
            var $startButton = $el.find('button:contains(Start)');

            // the amount of pause buttons we find on the page should be 1
            expect($startButton.length).toBe(1);
        });
    });
});