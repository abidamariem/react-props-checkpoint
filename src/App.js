import React, { Component } from 'react';
import './App.css';
import PersonProfile from './PersonProfile';
import TimerComponent from './TimerComponent';
class App extends Component {
 render() {
    return (
      <>
      <div className="App">
      <h1 style={{ color: 'red' }}>Person Profile</h1>
      <PersonProfile />
    </div>
    <div className="App">
      <h1>Time Interval Component</h1>
      <TimerComponent />
    </div>
    </>
    );
 }
}

export default App;