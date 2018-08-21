import React, {Component} from "react";
import Main_Js from '../src/js/main'

class CountdownTypeHhMmSs extends Component{
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        const hour = this.props.hour,
                min = this.props.min,
                sec = this.props.sec;
        Main_Js.countdownTypeHhMmSs(hour, min, sec)
    }

    render(){
        const reactStyle = {
            fillOpacity: 0,
            fill: 'white',
            stroke: '#648683',
            strokeWidth:1,
            strokeDasharray:400,
            strokeDashoffset:400
        }

        return (
            <div className="wrapper-countdown">
                <div className="wrapper-inner">
                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={reactStyle} id="hour" />  
                        </svg>
                        <div className="time-express">
                            <div id="hour_number" className="number"></div>
                            <hr className="line" />
                            <span>Hour</span>
                        </div>
                    </div>

                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={reactStyle} id="min" />
                        </svg>
                        <div className="time-express">
                            <div id="min_number" className="number"></div>
                            <hr className="line" />
                            <span>Min</span>
                        </div>
                    </div>

                    <div className="countdown-item">
                        <svg width="110" height="110">
                            <rect x="5" y="5" rx="20" ry="20" width="100" height="100" style={reactStyle} id="sec" />
                            </svg>
                        <div className="time-express">
                            <div id="sec_number" className="number"></div>
                            <hr className="line"/>
                            <span>Sec</span>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }   
}

export default CountdownTypeHhMmSs;