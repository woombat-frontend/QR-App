import React, { useState, useContext, useEffect } from 'react'
import '../../Styles/Views/Acumular.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Context from '../../GlobalState/context';
import QrReader from 'react-qr-reader'
import firebase from 'firebase'

const Acumular = () =>{


    const {state, actions} = useContext(Context)
    const [Qresult, setQresult] = useState([])
    const [QreaderState, setQreaderState] = useState(false)
    const db = firebase.firestore()

    const generateRandomId = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const createTemporaryCode = () => {
        
    }
    

    const handleScan = async data => {
        if (data) {
            await setQresult(data.split('*'))
            await setQreaderState(true)
        }
    }

    const handleError = err   => console.log(err)

    const checkLast = () => {
        let aux = state.personal_info.points
        if (QreaderState) {
            db.doc(`usuarios/${state.personal_info.uid}`).set({
                    points: aux + parseInt(Qresult[1])
                }, { merge: true })
            .then (() => {
                actions({
                    type: "setState",
                    payload: {
                        ...state,
                        menu_option: "AcumularFinal",
                        final_amount: Qresult[1],
                        personal_info: {
                            ...state.personal_info,
                            points: aux + parseInt(Qresult[1])
                        }
                    }
                })
            })
        }
    }

    const AnimationTimeOut = () =>{
        setTimeout(checkLast, 10);
    }


   /*  QreaderState ? 
    actions({ type: "setState", payload: { ...state, menu_option: "AcumularFinal" } }) 
    : 
    console.log() */

    return(
        <div className="container-master">
           <div className={`container-master-acumular ${QreaderState ? "hide-acumular" : ""}`}>
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
           {AnimationTimeOut()}
        </div>
    )
}

export default Acumular;