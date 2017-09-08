import React, { Component } from 'react';
import './App.css';
import Shape from './components/Shape';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inFocus: null
    }

    this.updateStateWhenClicked = this.updateStateWhenClicked.bind(this);
  }

  updateStateWhenClicked(event) {
    this.setState({ inFocus: event });
    console.log(this.state.inFocus);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Shape type='fa fa-thermometer-empty fa-3x' clickFunction={ this.updateStateWhenClicked } inFocus={ this.state.inFocus } />
          <Shape type='fa fa-battery-half fa-3x' clickFunction={ this.updateStateWhenClicked } inFocus={ this.state.inFocus } />
          <Shape type='fa fa-fighter-jet fa-3x' clickFunction={ this.updateStateWhenClicked } inFocus={ this.state.inFocus } />
          <Shape type='fa fa-hourglass-half fa-3x' clickFunction={ this.updateStateWhenClicked } inFocus={ this.state.inFocus } />
          <Shape type='fa fa-ship fa-3x' clickFunction={ this.updateStateWhenClicked } inFocus={ this.state.inFocus } />
        </div>
      </div>
    );
  }
}
