import React from 'react'

  const Filler = (props) => {
    const style  = {
        width: Math.abs(props.percentage)*10 + "%",
        // background: props.percentage > 0 ? 'green' : 'red'
    }
    return (
    <div
         className={ props.percentage < 0 ? 'negative' : 'positive'}
         style={style}>
    </div>
    )
  }


export default Filler;
