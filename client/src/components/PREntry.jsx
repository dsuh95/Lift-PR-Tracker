import React from 'react';

var PREntry = (props) => {
  return (
    <div id='feedEntry'>
      {/* <h2>{props.weight}: </h2>
      <h3>{props.date}</h3> */}
      <h3>{props.date}: {props.weight}lbs</h3>
    </div>
  )
}

export default PREntry;