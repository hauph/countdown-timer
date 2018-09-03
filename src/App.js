import React, { Component } from 'react';
import TypeHhMmSs from './TypeHhMmSs';
import TypeMmDdYyyy from './TypeMmDdYyyy'
import ColorPicker from './ColorPicker';
import './scss/App.css';

// Import Context
import ColorContext from './colorContext';

class App extends Component {
  constructor(props){
    super(props);

    this.showColorPicker = this.showColorPicker.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.closeColorPicker = this.closeColorPicker.bind(this)
    this.selectChange = this.selectChange.bind(this)

    this.state = {
      type: 0,
      color:'#000',
      showColorPicker: false
    }
  }

  selectChange(){
    let type = document.getElementsByTagName('select')[0].value;
    if (type === 'hh/mm/ss') {
      this.setState({type: 1})
    } else if (type === 'mm/dd/yyyy'){
      this.setState({type: 2})
    } else {this.setState({type: 0})}
  }

  // Show color picker for the countdown clock
  showColorPicker(){
    this.state.showColorPicker === true ? this.setState({showColorPicker: false}) : this.setState({showColorPicker: true})
  }

  // Handle when color is changed
  handleChangeComplete(color){
    this.setState({ color: color.hex});
  };

  // Close color picker when clicking somewhere on window
  closeColorPicker() {
    if(this.state.showColorPicker === true){
      this.setState({showColorPicker: false})
    }
  }

  render() {
    let renderSelect;

    if (this.state.type === 1) {
      renderSelect = <TypeHhMmSs />;
    } else if (this.state.type === 2) {
      renderSelect = <TypeMmDdYyyy />
    }

    return (
      // Use React Context API to provide color state value to CountdownTypeHhMsSs component inside TypeHhMmSs component
      <ColorContext.Provider value={this.state.color}>
        <div className="app text-center">
          <h1>Countdown Timer</h1>
          <form>
            <select onChange={this.selectChange}>
              <option value="none">Please choose a type...</option>
              <option value="mm/dd/yyyy">mm/dd/yyyy</option>
              <option value="hh/mm/ss">hh/mm/ss</option>
            </select>

            <ColorPicker onCloseColorPicker={this.closeColorPicker} onShowColorPicker={this.showColorPicker} color={ this.state.color } onChangeColor={ this.handleChangeComplete } showColorPicker={this.state.showColorPicker}/>
          </form>

          {renderSelect}
          <p><a href="https://github.com/hauph/countdown-timer">View Source</a></p>
        </div>
      </ColorContext.Provider>  
    );
  }
}

export default App;
