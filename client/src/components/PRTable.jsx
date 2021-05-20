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
    var maxList = prList.slice();
    if (maxList.length > 1) {
      maxList.sort((a, b) => {return b.weight - a.weight});
    }
    if (prList.length > 1) {
      var max = prList[0].weight;
      var lastMax = prList[1].weight;
      var difference = max - lastMax;
      // if (max > last) {
      //   difference = max - last;
      // } else if (last > max) {
      //   difference = last - prList[0].weight;
      // }
      // console.log(maxList[0].weight);
      // console.log(prList[0].weight);
      // console.log(prList[1].weight);
      // console.log(difference);
    }
  }
  return (
    <div id='liftFeed'>
      {liftName.length > 0
        ? <div>
            <h1 id='liftTitle'>{liftName}</h1>
            {maxList && maxList.length > 0
              ? <h1 id='pr'>Current PR: {maxList[0].weight}lbs on {maxList[0].date}</h1>
              : null
            }
            {prList.length > 0
              ? <div id='prInfo'>
                  <div id='prList'>
                    {prList.map(PR =>
                      <PREntry weight={PR.weight} date={PR.date}/>
                    )}
                  </div>
                  {difference !== undefined
                    ? <div id='progress'>
                        <h2>Your change in max <br/>weight this cycle: </h2>
                        <h1 id='change'>{difference}lbs</h1>
                        {difference > 0
                          ? <div id='message'>
                              <h2>Nice work!</h2>
                              <h3>Let's keep it going next cycle</h3>
                            </div>
                          : <div id='message'>
                              <h2>It's all good, next cycle!</h2>
                              <h3>Be sure to review your nutrition and recovery as well as your program</h3>
                            </div>
                        }
                      </div>
                    : null
                  }
                </div>
              : <h4 id='no-pr'>No recorded PRs yet</h4>
            }

          </div>
        : <h2 id='liftTitle'>Select a lift to get started</h2>
      }
    </div>

  )
}

export default PRTable;