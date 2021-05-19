import React from 'react';
import PREntry from './PREntry.jsx';
import moment from 'moment';

var PRTable = (props) => {
  var liftName = props.liftName !== 'Select a Lift' ? props.liftName : ''
  var prList = [];
  console.log(props.prList);
  if (props.prList.length > 0) {
    props.prList.forEach(entry => {
      if (entry.lift_name === liftName) {
        entry.date = moment(entry.date.split('T')[0]).format('MM-DD-YYYY');
        prList.push(entry);
      }
    })
    var maxList = prList.slice().sort((a, b) => {return b.weight - a.weight});
  }
  return (
    <div>
      {liftName.length > 0
        ? <div>
            <h2 id='liftTitle'>{liftName}</h2>
            {maxList
              ? <h2 id='pr'>Current PR: {maxList[0].weight}lbs on {maxList[0].date}</h2>
              : null
            }
            {prList.length > 0
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