import React from 'react'
import DeviationBar from './DeviationBar'
function Row(props){
    // console.log(props.data)

  return (
    <div className="row">
      {props.data.map((item, i)=>
        <div className="rowCell" key={i}>{item.sName_RU}</div>
      )}
      <div className="rowCell">Все валюты</div>
      <div className="rowCell">
      <DeviationBar  percentage={props.deviation} />
      </div>
    </div>
  )
}

export default Row;
