import React from 'react'
import '../modules/NavBar.css'

export const NavButton = ({estado,evento}) => {
    
    
    return (
        <button className="btnNav" onClick={evento}> 
        {   !estado?
            <i class="fas fa-align-left"></i>:
            <i class="fas fa-times"></i>
        }
         </button>
    )
}
