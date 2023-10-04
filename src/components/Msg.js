import React from 'react'

const Msg = (props) => {
  return (
    props.msg && <div className='Msg'>
    <h4>{props.msg}
    </h4>
  </div>
    
  )
}

export default Msg
