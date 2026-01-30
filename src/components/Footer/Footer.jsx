import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
        <div className="footerBottom">
            <p className="footerBottomleft">© 2026 Sebastian. All rights reserved.</p>
            <div className="footerBottomright">
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer