import React from 'react'
import logo from "../img/logo.jpg"

import "../Style/Navbar.scss"

const Navbar = () => {
  return (
    <>
    <nav className='Nav'>
        <div className="container">
            <div className="log"><img src={logo} alt="" /></div>
            <div className="details">
                <h1>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h1>
              
                    <p>235, 2nd Floor Opposite Sector - 13 Entrance, Model Town Hisar Haryana - 125001</p>
                    <div className="contact"><span> Contact:9015702702</span>  <span>Email:infopb77@gmail.com</span></div>
                    <p>CIN NO: U65999HR2018PLC077024</p>
                   
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar