import React, { useState } from 'react'

import "../Style/Member.scss"

import Navbar from "../Componants/Navbar"
import Footer from "../Componants/Footer"
import OTP from "../Componants/OTP"

import User from "../img/user.png"
import Pass from "../img/Password.png"
import Close from "../img/Close.png"

const Login = () => {
    const [style,setStyle]=useState("none")
    console.log(style)
  return (
    
      <>
      <Navbar />
      <form action="#" style={{display:`${style}`}} >
        <img src={Close} alt="" className='closeBtn' onClick={(e) =>{setStyle("none")}} />
   
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
<div className="container">
<div className="section">
    <div className="package">

   
            <div className="inputs">
                <div className="input">
                    <label htmlFor="inpNumber">Enter Number</label>
                    <div className="infield">
                                    <img src={Pass} alt="" />
                                    <input type="text" id='inpNumber' placeholder='Enter Mobile No' />
                                </div>
                   
                </div>
                <div className="input">
                    <label htmlFor="password">Create Password</label>
                    <div className="infield">
                                    <img src={Pass} alt="" />
                                    <input type="text" id='password' placeholder='Enter Password' />
                                </div>
                   
                </div>
                <div className="input">
                    <label htmlFor="password">Re-type Password</label>
                    <div className="infield">
                                    <img src={Pass} alt="" />
                                    <input type="text" id='password' placeholder='Enter Password' />
                                </div>
                  
                </div>
               
            </div>
            <button  onClick={(e) =>{setStyle("flex")}}>Become Member</button>

        </div>
        </div>
</div>

   <Footer />
   </>
  )
}

export default Login