import React from 'react'

import "../Style/Login.scss"

import Navbar from "../Componants/Navbar"
import Footer from "../Componants/Footer"

import benifit from "../img/benifit.png"
import User from "../img/user.png"
import Pass from "../img/Password.png"

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="benifit">
                    <h1>Benifit of Saving Account</h1>
                    <div className="details">
                        <div>
                            <img src={benifit} alt="" />
                            <p>Liquidity One of the benifit of opening saving account is that it offers you Liquidity</p>
                        </div>
                        <div>
                            <img src={benifit} alt="" />
                            <p>Liquidity One of the benifit of opening saving account is that it offers you Liquidity</p>
                        </div>
                        <div>
                            <img src={benifit} alt="" />
                            <p>Liquidity One of the benifit of opening saving account is that it offers you Liquidity</p>
                        </div>
                        <div>
                            <img src={benifit} alt="" />
                            <p>Liquidity One of the benifit of opening saving account is that it offers you Liquidity</p>
                        </div>
                        <div>
                            <img src={benifit} alt="" />
                            <p>Liquidity One of the benifit of opening saving account is that it offers you Liquidity</p>
                        </div>

                    </div>
                </div>

                <div className="logcontainer">
                    <div className="section">
                        <div className="inputs">
                            <div className="input">
                                <label htmlFor="inpNumber">Enter Number</label>
                                <div className="infield">
                                    <img src={User} alt="" />
                                    <input type="text" id='inpNumber' placeholder='Enter Mobile No' />
                                </div>

                            </div>
                            <div className="input">
                                <label htmlFor="password">Enter Password</label>
                                <div className="infield">
                                    <img src={Pass} alt="" />
                                    <input type="text" id='password' placeholder='Enter Password' />
                                </div>
                               
                            </div>
                            <div className="forgot">
                                <a href="#">Forget Password?</a>
                            </div>
                        </div>

                        <button>Login</button>
                        <a href="member">Become Member</a>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Login