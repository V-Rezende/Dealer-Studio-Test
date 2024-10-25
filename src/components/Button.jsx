import React from 'react'

const Button = ({buttonName, onClick}) => {
  return (
    <div className='button-place'>
      <button className='button' onClick={onClick}>{buttonName}</button>
    </div>
  )
}

export default Button