import React from 'react'
import Filler from './Filler'
function DeviationBar(props){
  return (
    <div className="progressBar">
      <Filler percentage = {props.percentage}/>
    </div>
  )


}

export default DeviationBar;
