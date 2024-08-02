import React from 'react'
import './Navbar.css' 

function Navbar() {
  return (
    <>
    <header>
      <div className="island__container">
        <div className="island">
          <div className="island__bar"></div>
          <div className="avatar">
            <img
              src="https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vinicius.png?updatedAt=1706233530929"
              alt="Your avatar"
            />
          </div>
        </div>
      </div>
      <h1>Vinicius Monteiro</h1>
    </header> 
    </>
  )
}

export default Navbar