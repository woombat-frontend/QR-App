import React, { useState } from 'react'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import QrReader from 'react-qr-reader'
import firebase from 'firebase'

const Acumular = () =>{

    const [Qresult, setQresult] = useState("")
    const db = firebase.firestore()

    const handleScan = async data => {
        
        if (data) {
            let splited = await data.split('*')
            // db.doc(`temporal_codes/${data}`).set({
            //     amount: 1000
            // })
            console.log(generateRandomId())
        }else {
            
        }
    }

    const generateRandomId = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const handleError = err => console.log(err)

    const createTemporaryCode = () => {
        
    }

    return(
        <div className="container-master">
           <div className="container-master-acumular">
                <div className="container-master-text-qr">
                    <div className="container-text-qr">
                        <p onClick={createTemporaryCode} ><FontAwesomeIcon icon={faQrcode} /> Escanear codigo QR</p>
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