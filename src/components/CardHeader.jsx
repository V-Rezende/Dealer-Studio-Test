import React from 'react'

const CardHeader = (props) => {
  return (
    <div className='heading'>
      <h2>{props.cardHeader}</h2>
    </div>
  )
}

export default CardHeader