import React from 'react'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'


const Acumular = () =>{
    return(
        <div className="container-master">
           <div className="container-master-acumular">
            <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p><FontAwesomeIcon icon={faQrcode} /> Escanear codigo QR</p>
                    </div>
                </div>
                <div>
                    <div className="container-qr-read"></div>
                </div>
           </div>
        </div>
    )
}

export default Acumular;