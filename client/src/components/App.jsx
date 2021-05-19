import React from 'react';
import $ from 'jquery';
import PRTable from './PRTable.jsx';
import moment from 'moment';

import sampleData from '../sampleData/liftData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
    this.setLift = this.setLift.bind(this);
    this.state = {
      data: sampleData.reverse(),
      lifts: ['Select a Lift', 'Back Squat', 'Front Squat', 'Deadlift', 'Bench Press', 'Bentover Row', 'Overhead Press', 'Weighted Pull Up', 'Clean', 'Clean and Jerk', 'Snatch'],
      currentLift: ''
    };
  }

  addEntry(entry) {
    if (entry && this.state.currentLift !== 'Select a Lift') {
      console.log(entry);
      entry = parseInt(entry);
      if (entry) {
        var data = this.state.data.slice();
        var newEntry = {
          lift: this.state.currentLift,
          weight: entry,
          date: moment().format('MM-DD-YYYY')
        }
        data.unshift(newEntry);
        this.setState({
          data: data
        })
      } else {
        console.log('not a valid entry')
      }
    } else {
      console.log('please enter a value');
    }
  }

  setLift(lift) {
    this.setState({
      currentLift: lift
    })
  }

  render() {
    return (
      <div>
        <div id='header'>
          <h1>Lift PR Tracker</h1>
          <h3>How's Your Progress?</h3>
        </div>
        <div id='nav'>
          <select id='lift' onChange={() => this.setLift($('#lift').val())}>
            {this.state.lifts.map(lift => (
              <option value={lift}>
                {lift}
              </option>
            ))}
          </select>
          <input type="text" id="weight" placeholder="What's your new PR?"/>
          <button onClick={() => {this.addEntry($('#weight').val())}}>Submit</button>
        </div>
        <div id='feed'>
          <PRTable liftName={this.state.currentLift} prList={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;