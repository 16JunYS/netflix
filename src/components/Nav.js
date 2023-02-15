import React, {useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [])
  

  return (

    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        className="nav__logo"
        onClick={()=>window.Location.reload()}
      />
      <img
        alt="User logged"
        src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-line-black-icon-png-image_691051.jpg"
        className="nav__avatar"
      />
    </nav>
  )
}

export default Nav