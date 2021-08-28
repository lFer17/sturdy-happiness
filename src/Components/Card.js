import React,{ useState } from 'react'
import styles from '../modules/marcoTarjetas.module.css'
import ButtonsActions from './ButtonsActions';
import Poema from './Poema'
const Card = () => {
    //  estado para setear los mensaje del poema que va siendo generado en los ButtonsActions 
    const [state, setstate] = useState("Puedes hacer click sobre este texto y escribir tu mensaje o generarlo el presionando el botón y editarlo a tu gusto");
    const [image,setImage] =useState(1);
    let playa1="playa"+image+".jpg";
    return (
        <>
        <div className={styles.card} 
        style={
            {backgroundImage:`url("/images/${playa1}")`}
        }>
           <Poema state={state} /> 
        </div>
        <ButtonsActions nextImage={setImage} image={image} setear ={setstate}/>
        </>
    )
}

export default Card
