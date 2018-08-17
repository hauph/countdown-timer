import React, { Component } from 'react';
import TypeHhMmSs from './TypeHhMmSs';
// /import TypeMmDdYyyy from './TypeMmDdYyyy;'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.handleTypeSelector = this.handleTypeSelector.bind(this)

    this.state = {
      type: 'mm/dd/yyyy'
    }
  }

  handleTypeSelector() {
    let checkType = this.state.type;
    if (checkType === 'mm/dd/yyyy') {
      this.setState({type: 'hh/mm/ss'})
    } else {
      this.setState({
        type: 'mm/dd/yyyy'
      })
    }
  }

  render() {
    let renderSelect;
    const type = this.state.type;
    if (type === 'hh/mm/ss') {
      renderSelect = <TypeHhMmSs />
    }

    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <form>
          <select value={this.state.type} onChange={this.handleTypeSelector}>
            <option value="mm/dd/yyyy">mm/dd/yyyy</option>
            <option value="hh/mm/ss">hh/mm/ss</option>
          </select>
        </form>
        {renderSelect}
      </div>
    );
  }
}

export default App;
