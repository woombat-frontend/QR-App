import React, { useState, useContext } from 'react'
import '../../Styles/Views/AcumularFinal.css'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faSearchLocation, faUndo } from '@fortawesome/free-solid-svg-icons'
import Context from '../../GlobalState/context';

const Acumular = () =>{

    const {state, actions} = useContext(Context)
    const [Show, setShow] = useState("")

    const Change = () =>{
        setTimeout(setClass,10)
    }
    const setClass = () =>{
        setShow("show-final")
    }

    return(
        <div className="container-master">
            {Change()}
           <div className={`container-master-acumular-final ${Show}`}>
                <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p><FontAwesomeIcon icon={faCheckCircle} /> ¡Felicidades!</p>
                    </div>
                </div>
                <div className="container-master-text-recharge">
                    <p className="text-small-recharge">Ha recargado</p>
                    <p className="text-big-recharge">{state.final_amount}</p>
                    <p className="text-small-recharge">Puntos</p>
                </div>
                <hr className="separator" />
                <div className="container-near-you-locals-acumular-final">
                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <p className="text-near-you">Conoce establecimientos cercanos para gastar tus puntos</p>
                </div>
                <div className="near-you-locals-buttom-acumular-final">
                    <p className="text-near-you-locals-buttom-acumular-final"><FontAwesomeIcon icon={faSearchLocation}/> Sitios Cercanos</p>
                </div>
                <div onClick={()=> actions({ type: "setState", payload: { ...state, menu_option: "Inicio" } })}>
                    <p className="go-back-home"><FontAwesomeIcon icon={faUndo}/> Volver al inicio</p>
                </div>
           </div>
        </div>
    )
}

export default Acumular;