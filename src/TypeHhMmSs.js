import React, {Component} from 'react';

class TypeHhMmSs extends Component {
    constructor(props) {
        super(props);
        this.handleHourChange = this.handleHourChange.bind(this)
        this.handleMinChange = this.handleMinChange.bind(this)
        this.handleSecChange = this.handleSecChange.bind(this)

        this.state = {
            hour:0,
            min:0,
            sec:0
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

        return (
            <form>
                <p>Set Hour/Minute/Second</p>
                {/* <div>
                    <span>Hour</span>
                    <span>Minute</span>
                    <span>Second</span>
                </div> */}
            
                <select value={this.state.hour} onChange={this.handleHourChange}>
                    {hourList}
                </select>
        
                <select value={this.state.min} onChange={this.handleMinChange}>
                    {minList}
                </select>

                <select value={this.state.sec} onChange={this.handleSecChange}>
                    {secList}
                </select>
            </form>
        )
    }
}

export default TypeHhMmSs;