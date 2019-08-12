import React, { useState } from 'react'
import '../../Styles/Views/Tienda.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import QrExample from '../../assets/demo-img/qr.png'


const Tienda = props =>{

    const [AcceptDiscount, setAcceptDiscount] = useState(false)

    return(
        <div className="container-master">
            <div className="container-local-store">
                <div className="container-img-store">
                    <img src={require(`../../assets/demo-img/pilon.jpg`)} className="img-local-store" />
                </div>
                <div className="container-details-local">
                    <p className="text-name-local-store">Hamburguesas el Pilon</p>
                    <p className="text-direction-local-store"><FontAwesomeIcon icon={faLocationArrow} /> A 8-87, Carrera 66 #8-1</p>
                </div>
            </div>
            <hr className="separator-store" />
            <div className="container-info-store">
                <p className="text-discount-store">20% de descuento</p>
                <p className="text-points-store">5000 puntos</p>
            </div>
            <div className={`container-buttom-accept-discount ${!AcceptDiscount ? "show" : "hide"}`}>
                <div className="buttom-accept-discount" onClick={() => setAcceptDiscount(true)}>
                    <p className="text-accept-discount"><FontAwesomeIcon icon={faCheckSquare} /> Aceptar Descuento</p>
                </div>
            </div>
            <div className={`container-qr-store ${AcceptDiscount ? "show" : "hide"}`}>
                <img className="qr-store" src={QrExample} />
                <div className="container-info-pay-store">
                    <div>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <p className="text-store-info">Al momento del pago en Hamburguesas el Pilon, indique al encargado que desea registar el descuento dado por la aplicación ALBOS</p>
                </div>
            </div>
        </div>
    )
}

export default Tienda