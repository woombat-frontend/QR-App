import React from 'react'
import '../../Styles/Views/Tienda.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Tienda = props =>{
    return(
        <div className="container-master">
            <div className="container-local-store">
                <div className="container-img-store">
                    <img src={require(`../../assets/demo-img/pilon.jpg`)} className="img-local-store" />
                </div>
                <div className="container-details-local">
                    <p className="text-name-local-store">Tiendas KOAJ</p>
                    <p className="text-direction-local-store"><FontAwesomeIcon icon={faLocationArrow} /> Calle 26 # 62-47</p>
                </div>
            </div>
            <hr className="separator-store" />
        </div>
    )
}

export default Tienda