import React from 'react';
import PREntry from './PREntry.jsx';

var PRTable = (props) => {
  var liftName = props.liftName !== 'Select a Lift' ? props.liftName : ''
  var prList = [];
  props.prList.forEach(entry => {
    if (entry.lift === liftName) {
      prList.push(entry);
    }
  })
  return (
    <div>
      {liftName.length > 0
        ? <div>
            <h2 id='liftTitle'>{liftName}</h2>
            <h3 id='pr'>Current PR: {prList[0].weight} on {prList[0].date}</h3>
            {prList.slice(1, prList.length - 1).map(PR =>
              <PREntry weight={PR.weight} date={PR.date}/>
            )}
          </div>
        : <h2 id='liftTitle'>Select a lift!</h2>
      }
    </div>

  )
}

export default PRTable;