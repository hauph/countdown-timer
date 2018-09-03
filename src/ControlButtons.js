import React, {Component} from 'react';

// Import Bootstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ControlButtons extends Component {
    constructor(props){
        super(props)

        this.pauseResume = this.pauseResume.bind(this);
        this.restart = this.restart.bind(this)
    }

    pauseResume(){
        this.props.onClickPauseResume()
    }

    restart(){
        this.props.onClickRestart()
    }

    render(){
        return(
            <div className="control-btn-wrapper">
                <Button id="pause-resume" onClick={this.pauseResume} outline color="primary">Pause</Button>
                <Button id="restart" onClick={this.restart} outline color="danger">Restart</Button>
            </div>
        )
    }
}

export default ControlButtons;