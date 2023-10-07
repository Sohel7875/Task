import React from 'react'

import "../Style/Footer.scss"

const Footer = () => {
  return (
<>
<footer className="footer">
    <div className="company">
      <span>Company</span>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
        </ul>
    </div>
    <div className="Support">
        <span>Support</span>
    <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Center</a></li>
            <li><a href="#">Community Guidlines</a></li>
        </ul>
    </div>
    <div className="Legal">
        <span>Legal</span>
    <ul>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term of Service</a></li>
            <li><a href="#">Law Enforcment</a></li>
        </ul>
    </div>
    <div className="install">
    <li><a href="#">Install App</a></li>
    </div>
</footer>
</>
  )
}

export default Footer