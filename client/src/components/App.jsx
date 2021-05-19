import React, {useEffect} from 'react';
import $ from 'jquery';
import PRTable from './PRTable.jsx';
import moment from 'moment';
const axios = require('axios');

import sampleData from '../sampleData/liftData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
    this.setLift = this.setLift.bind(this);
    this.getPRs = this.getPRs.bind(this);
    this.state = {
      data: [],
      lifts: ['Select a Lift', 'Back Squat', 'Front Squat', 'Deadlift', 'Bench Press', 'Bentover Row', 'Overhead Press', 'Weighted Pull Up', 'Clean', 'Clean and Jerk', 'Snatch'],
      currentLift: ''
    };
  }

  componentDidMount() {
    this.getPRs();
  }

  // componentDidUpdate() {
  //   this.getPRs();
  // }

  getPRs(lift) {
    var self = this;
    $.ajax({
      method: 'GET',
      url: `/pr?liftName=${lift}`,
      success: (results) => {
        console.log(results);
        self.setState({
          data: results.reverse()
        })
      }
    })
  }

  addEntry(entry, liftName) {

    if (entry && liftName !== 'Select a Lift') {
      entry = parseInt(entry);
      if (entry) {
        var newEntry = {
          liftName: liftName,
          weight: entry,
          date: moment().format('MM-DD-YYYY')
        }
        $.ajax({
          method: 'POST',
          url: `/pr`,
          data: newEntry,
        })
        this.getPRs(liftName);
      } else {
        console.log('not a valid entry')
      }
    } else {
      console.log('please select appropriate values');
    }
  }

  setLift(lift) {
    this.setState({
      currentLift: lift
    })
    this.getPRs(lift);
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
          <button onClick={() => {this.addEntry($('#weight').val(), $('#lift').val())}}>Submit</button>
        </div>
        <div id='feed'>
          <PRTable liftName={this.state.currentLift} prList={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;