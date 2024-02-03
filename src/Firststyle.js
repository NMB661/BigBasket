import React from 'react'

const Firststyle = () => {
    const main={
        color:'brown',
        fontSize:30,
        fontWeight:'bolder',
        textAlign:'center'
    
      }
  return (
    <div className='first'>
    <div style={{ color: 'purple', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Shruti Bhujbal</div>
    <div style={main}>TE Computer</div>
    <div className='main1'>At SCSMCOE</div>
  </div>
  )
}

export default Firststyle