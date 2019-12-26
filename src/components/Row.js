import React from 'react'
import DeviationBar from './DeviationBar'
function Row(props){

  const className = props.deviation < 0 ? 'negative' : 'positive';
  const relativeDevi = Math.abs(props.deviation) /  props.maxDeviation * 100;

  return (
    <div className="row">
      {props.data.map((item, i)=>
        <div className="rowCell" key={i}>{item.sName_RU}</div>
        )}
      <div className="rowCell">Все валюты</div>
      <div className={"rowCell deviationCell " + className}>
        <div className="deviValue">
          {props.deviation < 0 ? '+ ' : '- '}
          {relativeDevi.toFixed(2) + ' п.п.'}
        </div>
        <div className="deviBar">
          <DeviationBar deviation={props.deviation} relativeDevi = {relativeDevi}/>
        </div>
      </div>
    </div>
  )
}

export default Row;
