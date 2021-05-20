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
      lifts: ['Select a Lift', 'Back Squat', 'Front Squat', 'Deadlift', 'Bench Press', 'Overhead Press', 'Turkish Get Up', 'Clean', 'Clean and Jerk', 'Snatch'],
      currentLift: ''
    };
  }

  componentDidMount() {
    this.getPRs();
  }

  getPRs() {
    var self = this;
    $.ajax({
      method: 'GET',
      url: `/pr`,
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
        this.getPRs();
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
  }

  render() {
    return (
      <div>
        <div id='header'>
          <h1>Lift Maxout Tracker</h1>
          <h3>How's Your Progress?</h3>
        </div>
        <div id='feed'>
          <div id='nav'>
            <select id='lift' onChange={() => this.setLift($('#lift').val())}>
              {this.state.lifts.map(lift => (
                <option value={lift}>
                  {lift}
                </option>
              ))}
            </select>
            <input type="text" id="weight" placeholder="What's your new PR?"/>
            <button id="button" onClick={() => {this.addEntry($('#weight').val(), $('#lift').val())}}>Submit</button>
          </div>
          <PRTable liftName={this.state.currentLift} prList={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;