import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus) {
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
            var newCount = this.state.count -1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
    }
    handleSetCountdown (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }
    handleStatusChange (newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    }
    render() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
}

export default Countdown;