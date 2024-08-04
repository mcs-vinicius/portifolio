import React from 'react'
import './Navbar.css' 

function Navbar() {

  return (
    <>
    <header>
      <div className="island__container">
        <div className="island">
          
        <div className="island__bar">
        <nav>
          <ul>
            <li className="menubt"><a href="">First</a></li>
            <li className="menubt"><a href="">Second</a></li>
            <li className="menubt"><a href="">Third</a></li>
          </ul>
        </nav>
        </div>
          <div className="avatar">
            <img src="https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vinicius.png?updatedAt=1706233530929"alt="Your avatar"/>
          </div>
        </div>
      </div>
    </header> 
    </>
  )
}

export default Navbar