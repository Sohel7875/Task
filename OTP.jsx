import React, { useState } from 'react'

import "../Style/OTP.scss"

const OTP = () => {
  const [style,setStyle]=useState("flex")
  // console.log(style)
  return (
   <>
   <form action="#" style={{display:`${style}`}} >
    <h2 className='closeBtn' onClick={(e) =>{setStyle("none")}}>X</h2>
<div className="input-field"  >
  <h1>Enter OTP</h1>
  <div className="inputs">
    

    <input type="numbers" placeholder='-'  />
    <input type="numbers"  disabled placeholder='-'  />
    <input type="numbers"  disabled placeholder='-'  />
    <input type="numbers"  disabled placeholder='-'  />
    <input type="numbers"  disabled placeholder='-'  />
    <input type="numbers"  disabled placeholder='-'  />
    </div>

    <button>Verify</button>
</div>

   </form>
   
   </>
  )
}

export default OTP