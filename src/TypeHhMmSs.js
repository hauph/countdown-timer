import React, {Component} from 'react';
import CountdownTypeHhMmSs from './CountdownTypeHhMmSs';

class TypeHhMmSs extends Component {
    constructor(props) {
        super(props);
        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleSecChange = this.handleSecChange.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);

        this.state = {
            hour:0,
            min:0,
            sec:0,
            showClock: 0
        }
    }

    handleHourChange(e){
        this.setState({hour: e.target.value});
    }

    handleMinChange(e){
        this.setState({min: e.target.value});
    }

    handleSecChange(e){
        this.setState({sec: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const valueHour = this.state.hour;
        const valueMin = this.state.min;
        const valueSec = this.state.sec;

        if (valueSec > 0 || valueMin > 0 || valueHour > 0){
            this.setState({showClock:1})
        } else {
            this.setState({showClock:2})
        }
    }

    render(){
        var hourArray = [],
            minArray = [],
            secArray = [];

        for (let i = 0; i < 24; i ++){
            let hour = i
            hourArray.push(hour)
        }
        const hourList = hourArray.map((hour)=>
            <option key={hour} value={hour}>{hour}</option>
        )

        for (let j = 0; j < 60; j ++){
            let min = j
            minArray.push(min)
            secArray.push(min)
        }
        const minList = minArray.map((min)=>
            <option key={min} value={min}>{min}</option>
        )
        const secList = secArray.map((sec)=>
            <option key={sec} value={sec}>{sec}</option>
        )

        const _showClock = this.state.showClock;
        let clockComponent;
        if (_showClock === 1) {
            clockComponent = <CountdownTypeHhMmSs hour={this.state.hour} min={this.state.min} sec={this.state.sec} />;
        } else if (_showClock === 2) {
            clockComponent = <h3>Please set up timer</h3>;
        }


        return (
            <div className="hh-mm-yyyy">
                <form onSubmit={this.handleSubmit}>
                    <p>Set Hour/Minute/Second</p>
                
                    <select value={this.state.hour} onChange={this.handleHourChange}>
                        {hourList}
                    </select>
            
                    <select value={this.state.min} onChange={this.handleMinChange}>
                        {minList}
                    </select>

                    <select value={this.state.sec} onChange={this.handleSecChange}>
                        {secList}
                    </select>

                    <input type="submit" value="Start" />
                </form>

                {clockComponent}
            </div>
        )
    }
}

export default TypeHhMmSs;