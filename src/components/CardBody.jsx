import React from 'react'

const CardBody = (props) => {
  return (
    <div className='card-body'>
      <p className='textone'>{props.cardBody1}</p>
      <p className='texttwo'>{props.cardBody2}</p>
    </div>
  )
}

export default CardBody