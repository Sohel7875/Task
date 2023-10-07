import React from 'react'

import "../Style/Kyc.scss"

import Navbar from "../Componants/Navbar"
import Footer from "../Componants/Footer"


import User from "../img/member-1.png"
import leftarrow from "../img/leftarrow.png"
import rightarrow from "../img/rightarrow.png"

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container">


                <div className="LeftContainer">
                    <div className="Lsection">
                        <img src={User} alt="" />
                        <div className="details">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio possimus atque sequi nihil tempore quasi cupiditate pariatur, nemo praesentium nostrum animi saepe deserunt cum perspiciatis ratione iusto, quae dolorum velit ea itaque architecto vitae deleniti corporis. Ipsa, quia ad consequuntur saepe facilis iste, architecto veniam labore fuga obcaecati corrupti qui?</p>
                       
                       <div className="cred">
                        <h2>Priyanka Chaudhary</h2>
                        <p>UI/UX Designer</p>
                       </div>
<div className="navbtn">


                  <img src={leftarrow} alt="" className="leftarrow" />
                  <img src={rightarrow} alt="" className="rightarrow" />
                  </div>

                    </div>
                    </div>



                </div>

                <div className="logcontainer">
                    <div className="section">
                        <h1>Become a member</h1>

                        <div className="opt">
                            <a href="#">E-KYC</a>
                            <a href="#">Manual KYC</a>
                        </div>



                    </div>


                </div>
            </div>



            <Footer />
        </>
    )
}

export default Login