import React from 'react';
import Clock from './Clock';
import Controls from './Controls';

// import clock
// add controls
// make sure start button works
// make sure stop button works
// make sure clear button works



class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'paused'
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus){
            switch(this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }
    componentWillUnmount () {
        console.log('component did unmount');
        clearInterval(this.timer);
        this.timer = undefined;
    }
    startTimer () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    }
    handleStatusChange (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    }
    render() {
        var {count, timerStatus} = this.state;
        // var renderControlArea = () => {
        //     if (timerStatus !== 'stopped') {
        //         return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        //     } else {
        //         return <Controls/>;
        //     }
        // };
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}

export default Timer;