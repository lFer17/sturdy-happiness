import React from 'react'
import style from'../modules/Message.module.css'
const Poema = ({state}) => {
    
    

    return (
        <>
        <div className={style.message} id="divcontents" contentEditable= "true" >
         {state}
        </div>
        <br/>
        </>
    )
}

export default Poema
