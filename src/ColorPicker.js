import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import onClickOutside from "react-onclickoutside";

class ColorPicker extends Component {
    constructor(props) {
        super(props)

        this.eventshowColorPicker = this.eventshowColorPicker.bind(this);
        this._handleChangeComplete = this._handleChangeComplete.bind(this);
    }

    // Show color picker for the countdown clock
    eventshowColorPicker(){
        this.props.onShowColorPicker()
    }

    // Handle when color is changed
    _handleChangeComplete(color) {
        this.props.onChangeColor(color)
    }

    // Close color picker when clicking somewhere on window
    handleClickOutside(e){
        this.props.onCloseColorPicker()
    }

    render () {
        let showColorPicker = this.props.showColorPicker;

        const colorPanelStyle = {
            width: '60px',
            height:'29px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
            borderRadius: '3px',
            cursor: 'pointer',
            backgroundColor: this.props.color,
        }

        return (
            <div className="color-wrapper">
                <div className="color-panel" onClick={this.eventshowColorPicker} style={colorPanelStyle} title="Pick a color"></div>

                {showColorPicker && 
                    <ChromePicker color={ this.props.color } onChangeComplete={ this._handleChangeComplete } />
                } 
            </div>
        )
    }
}

export default onClickOutside(ColorPicker);