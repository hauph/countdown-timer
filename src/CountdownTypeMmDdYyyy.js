import React, {Component} from "react";
import Main_Js from '../src/js/main'
import './scss/countdown.css';
import peep from './media/simonSound1.mp3';
import alarm from './media/Alarm.mp3'

class CountdownTypeMmDdYyyy extends Component{
    constructor(props){
        super(props);
        this.tick = this.tick.bind(this);

        this.state = {
            totalSecs: this.props.totalSec
        }
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.tick();
        }, 1000)       
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        if(this.props.pause === true) return;

        if(this.state.totalSecs > 0) {
            this.setState((prevState, props)=>({
                totalSecs: prevState.totalSecs - 1
            }))

            if (this.state.totalSecs <=5) {
                new Audio(peep).play()
            }
        } else if (this.state.totalSecs === 0) {
            this.setState({totalSecs: 0})
            new Audio(peep).pause()
        }

        let _totalSecs = this.state.totalSecs;
        Main_Js.countdownTypeMmDdYyyy(_totalSecs) 
    }

    render(){
        if (this.state.totalSecs === 0){
            document.getElementById('alarm').play()
        }

        const svgStyle = {
            fillOpacity: 0,
            fill: 'white',
            stroke: this.props.color,
            strokeWidth:1,
            strokeDasharray:400,
            strokeDashoffset:400
        },
        numberColor = {
            color: this.props.color,
        },
        lineColor = {
            borderColor: this.props.color,
        }

        return (
            <div className="wrapper-countdown">
                <div className="wrapper-inner">
                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={svgStyle} id="day" />
                        </svg>
                        <div className="time-express">
                            <div id="day_number" className="number" style={numberColor}></div>
                            <hr className="line" style={lineColor}/>
                            <span style={numberColor}>Day</span>
                        </div>
                    </div>

                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={svgStyle} id="hour" />  
                        </svg>
                        <div className="time-express">
                            <div id="hour_number" className="number" style={numberColor}></div>
                            <hr className="line" style={lineColor}/>
                            <span style={numberColor}>Hour</span>
                        </div>
                    </div>

                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={svgStyle} id="min" />
                        </svg>
                        <div className="time-express">
                            <div id="min_number" className="number" style={numberColor}></div>
                            <hr className="line" style={lineColor}/>
                            <span style={numberColor}>Min</span>
                        </div>
                    </div>

                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={svgStyle} id="sec" />
                            </svg>
                        <div className="time-express">
                            <div id="sec_number" className="number" style={numberColor}></div>
                            <hr className="line" style={lineColor}/>
                            <span style={numberColor}>Sec</span>
                        </div>
                    </div>
                </div>
                <audio id="alarm" src={alarm}/>
            </div> 
        )
    }
}

export default CountdownTypeMmDdYyyy;