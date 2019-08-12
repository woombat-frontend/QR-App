import React, { useState, useContext } from 'react'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Context from '../../GlobalState/context';
import QrReader from 'react-qr-reader'

const Acumular = () =>{


    const {state, actions} = useContext(Context)
    const [Qresult, setQresult] = useState("")
    const [QreaderState, setQreaderState] = useState(false)

    const handleScan = data => 
        data 
        ? (setQresult(data), setQreaderState(true))
        : (console.log('%cnot code to scan', 'color: red; font-weight: bolder;'), setQreaderState(false))

    const handleError = err => console.log(err)

    QreaderState ? 
    actions({ type: "setState", payload: { ...state, menu_option: "AcumularFinal" } }) 
    : 
    console.log()

    return(
        <div className="container-master">
           <div className="container-master-acumular">
                <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p><FontAwesomeIcon icon={faQrcode} /> Escanear codigo QR</p>
                    </div>
                </div>
                <div className="container-master-qr-reader">
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan} 
                        style={{ width: '82%', border: 'none' }}
                    />
                </div>
                <div className="container-info-gas-station">
                    <div className="container-info-icon-gas-station">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <p className="text-info-acumular">Indique al encargado de la estación de servicio que desea registar puntos para la aplicación ALBOS</p>
                </div>
           </div>
        </div>
    )
}

export default Acumular;