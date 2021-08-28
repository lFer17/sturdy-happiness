import React from 'react'
import {PhraseGenerator} from '../hooks/PhraseGenerator'
import {printMessage} from '../hooks/Print'
import style from '../modules/ActionsButtons.module.css'

const ButtonsActions = ({nextImage,image, setear}) => {
    // Manejando cambio de imagenees por medio del parametro nextImage y el contador con image
    const handleImage=()=>{
        if (image<3){
            nextImage(c=> c + 1)
        }else{
            nextImage(1)
        }
    }
    return (
        <div className={style.container} >
        <button className={style.group_btn} onClick={printMessage}><i class="fas fa-print"></i></button>
        <button  className={style.group_btn} onClick={()=> setear(PhraseGenerator())}>crear mensaje<i class="fas fa-pencil-alt"></i></button>
        <button  className={style.group_btn} onClick={handleImage}>Cambiar Imagen<i class="fas fa-sync-alt"></i></button>
        </div>
    )
}

export default ButtonsActions
