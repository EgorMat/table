import React from 'react'

  const Filler = (props) => {
    const style  = {
        width: props.width + '%'
    }
    return (
    <div
         className={"filler"}
         style={style}>
    </div>
    )
  }


export default Filler;
