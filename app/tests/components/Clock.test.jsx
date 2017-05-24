import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';
import Clock from '../../components/Clock';

describe('Clock', () => {
   it('should exist', () => {
      expect(Clock).toExist();
   });

   describe('render', () => {
       it('should render clock to output', () => {
          var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
          // findDOMNode turns our component into the actual HTML that is rendered to the browser
          var $el = $(ReactDOM.findDOMNode(clock));
          var actualText = $el.find('.clock-text').text();

          expect(actualText).toBe('01:02');
       });
    });

   describe('formatSeconds', () => {
       it('should format seconds', () => {
            // In order to test the component's methods, need to render it
           var clock = TestUtils.renderIntoDocument(<Clock/>);
           var seconds = 615;
           var expected = '10:15';
           var actual = clock.formatSeconds(seconds);

           expect(actual).toBe(expected);
       });

       it('should format seconds when min/sec less than 10', () => {
           // In order to test the component's methods, need to render it
           var clock = TestUtils.renderIntoDocument(<Clock/>);
           var seconds = 61;
           var expected = '01:01';
           var actual = clock.formatSeconds(seconds);

           expect(actual).toBe(expected);
       });
   });
});
