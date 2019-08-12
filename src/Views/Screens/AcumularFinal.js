import React, { useState, useContext } from 'react'
import '../../Styles/Views/AcumularFinal.css'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faSearchLocation, faUndo } from '@fortawesome/free-solid-svg-icons'
import Context from '../../GlobalState/context';

const Acumular = () =>{

    const {state, actions} = useContext(Context)

    return(
        <div className="container-master">
           <div className="container-master-acumular">
                <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p><FontAwesomeIcon icon={faCheckCircle} /> ¡Felicidades!</p>
                    </div>
                </div>
                <div className="container-master-text-recharge">
                    <p className="text-small-recharge">Ha recargado</p>
                    <p className="text-big-recharge">10.000</p>
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