import React from 'react'
import Filler from './Filler'

function DeviationBar(props){
  return (
    <div className="deviationBar">
      <Filler width={props.relativeDevi} />
    </div>
  )


}

export default DeviationBar;
