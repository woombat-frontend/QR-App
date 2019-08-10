import React from 'react'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Acumular = () =>{
    return(
        <div className="container-master">
           <div className="container-master-acumular">
                <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p><FontAwesomeIcon icon={faQrcode} /> Escanear codigo QR</p>
                    </div>
                </div>
                <div className="container-master-qr-reader">
                    <div className="container-qr-reader"></div>
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