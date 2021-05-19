import React from 'react';
import PREntry from './PREntry.jsx';

var PRTable = (props) => {
  var liftName = props.liftName !== 'Select a Lift' ? props.liftName : ''
  var prList = [];
  var maxList = props.prList.slice().sort((a, b) => {return b.weight - a.weight});
  props.prList.forEach(entry => {
    if (entry.lift === liftName && entry.weight !== maxList[0].weight) {
      prList.push(entry);
    }
  })
  return (
    <div>
      {liftName.length > 0
        ? <div>
            <h2 id='liftTitle'>{liftName}</h2>
            {maxList[0]
              ? <h2 id='pr'>Current PR: {maxList[0].weight}lbs on {maxList[0].date}</h2>
              : null
            }
            {prList.length > 1
              ? <div id='prList'>
                  {prList.map(PR =>
                    <PREntry weight={PR.weight} date={PR.date}/>
                  )}
                </div>
              : <h4 id='pr'>No recorded PRs yet!</h4>
            }

          </div>
        : <h2 id='liftTitle'>Select a lift!</h2>
      }
    </div>

  )
}

export default PRTable;