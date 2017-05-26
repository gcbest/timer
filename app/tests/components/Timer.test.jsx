import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Timer from '../../components/Timer';

describe('Timer', () => {
   it('should exist', () => {
       expect(Timer).toExist();
   });

   describe('render', () => {
      it('should render the start button when it first loads', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            var $el = $(ReactDOM.findDOMNode(timer));

            var $startButton = $el.find('button:contains(Start)');
            expect($startButton.length).toBe(1);
      });
   });

   describe('handleSetCountdowm', () => {
       it('should start timer on started status ', (done) => {
           var timer = TestUtils.renderIntoDocument(<Timer/>);
           // var $el = $(ReactDOM.findDOMNode(timer));

           timer.handleStatusChange('started');
           expect(timer.state.count).toBe(0);

           setTimeout(() => {
              expect(timer.state.count).toBe(2);
              expect(timer.state.timerStatus).toBe('started');
              done();
           }, 2000);
       });

       it('should pause timer on paused status ', (done) => {
           var timer = TestUtils.renderIntoDocument(<Timer/>);
           // var $el = $(ReactDOM.findDOMNode(timer));

           expect(timer.state.count).toBe(0);
           timer.handleStatusChange('started');
           timer.handleStatusChange('paused');


           setTimeout(() => {
               expect(timer.state.count).toBe(0);
               expect(timer.state.timerStatus).toBe('paused');
               done();
           }, 1000);
       });
   });
});