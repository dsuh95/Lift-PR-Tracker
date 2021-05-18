import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Lift PR Tracker</h1>
        <h2>Input your most recent PR to see your progress this cycle!</h2>
      </div>
    )
  }
}

export default App;