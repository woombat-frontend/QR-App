import React, { useState, useEffect} from 'react'
import '../../Styles/Views/Tienda.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faInfoCircle, faCookie} from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import QrExample from '../../assets/demo-img/qr.png'
import QRCode from 'qrcode.react'


const Tienda = props =>{

    const [AcceptDiscount, setAcceptDiscount] = useState(false)
    const [Commerce, setCommerce] = useState({
        name: 'Hamburguesas el Pilon',
        address: 'A 8-87, Carrera 66 #8-1',
        discount: '20'
    })
    const [qrValue, setQrValue] = useState(1000)



    return(
        <div className="container-master">
            <div className="container-local-store">
                <div className="container-img-store">
                    <img src={require(`../../assets/demo-img/pilon.jpg`)} className="img-local-store" />
                </div>
                <div className="container-details-local">
                    <p className="text-name-local-store">{Commerce.name}</p>
                    <p className="text-direction-local-store"><FontAwesomeIcon icon={faLocationArrow} /> {Commerce.address}</p>
                </div>
            </div>
            <hr className="separator-store" />
            <div className="container-info-store">
                <p className="text-discount-store">{Commerce.discount}% de descuento</p>
                <p className="text-points-store">1000 puntos</p>
            </div>
            <div className={`container-buttom-accept-discount ${!AcceptDiscount ? "show" : "hide"}`}>
                <div className="buttom-accept-discount" onClick={() => setAcceptDiscount(true)}>
                    <p className="text-accept-discount"><FontAwesomeIcon icon={faCheckSquare} /> Aceptar Descuento </p>
                </div>
            </div>
            <div className={`container-qr-store ${AcceptDiscount ? "show" : "hide"}`}>
                <div style={{background: 'white', padding: '1em', marginBottom: '2em'}}>
                    <QRCode value={qrValue} size='100' fgColor='#282828' />
                </div>
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