import React, { useState } from 'react'
import '../modules/NavBar.css'
import { NavButton } from './NavButton';
import { NavContent } from './NavContent';
const NavBar = () => {
  const [state, setstate] = useState(false);
    const handleClick=()=>{
       setstate(!state)
     }
    return (
        <>
        <NavButton estado={state} evento={handleClick}/>
        {        
        <div className= {state?"nav animate__animated animate__fadeInLeft":"nav navHide animate__animated animate__fadeOutLeft"} >
            <NavContent/>
        </div>
        }
        </>
    )
}

export default NavBar
