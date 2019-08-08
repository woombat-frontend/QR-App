import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser, faFolder, faMoneyBillAlt, faAddressCard, faMap, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import '../../Styles/Header.css'
import Ropa from '../../assets/demo-img/ropa.jpg'

const OptionsMenu = [
    {name: "Acumular", icon: faUser},
    {name: "Categorias", icon: faFolder},
    {name: "Promociones", icon: faMoneyBillAlt},
    {name: "Perfil", icon: faAddressCard},
    {name: "Ubicación", icon: faMap},
    {name: "Ayuda", icon: faQuestionCircle},
    {name: "Cerrar Sesión", icon: faSignOutAlt}
]



const Header = props =>{

    const [ShowMenu, setShowMenu] = useState(false)

    const ActiveMenu = () =>{
        setShowMenu(true)
    }

    const Options = nameOption =>{
        if (nameOption === "Cerrar Sesión") {
            setShowMenu(false)
        }
    }


    return(
        <React.Fragment>
            <div className="header-fixed">
                <div className="container-master-header">
                    <div className="container-left-header" onClick={ActiveMenu}>
                        <FontAwesomeIcon icon={faBars} className="bar-icon-header" />
                    </div>
                    <div className="container-right-header">
                        <p className="text-header-right">{props.title}</p>
                    </div>
                </div>
            </div>
            <div className={`container-full-menu ${ShowMenu ? "active-menu" : ""}`}>
                <div className="container-bars-full-menu">
                    <FontAwesomeIcon icon={faBars} className="bars-full-menu" />
                </div>
                <div className="spacing-left-full-menu">
                    <p className="text-menu">Menú</p>
                    <div className="points-container-menu-full">
                        <p className="text-points-title">Puntos Acumulados</p>
                        <p className="text-points">3000</p>
                    </div>
                </div>
                {/* <div className="container-master-promotions-full-bar">
                    <div className="container-promotion-1style-full-bar">
                        <div className="figure-1style-full-bar" />
                        <div className="container-text-promotion-1style">
                            <div className="container-master-text-1style">
                                <p className="text-promotion-1style">Promoción</p>
                                <p>Tiendas KOAJ</p>
                                <p className="discount-text-1style">20% de descuento</p>
                                <p className="points-text-promotion-1style">3000 puntos</p>
                            </div>
                        </div>
                        <img src={Ropa} className="container-img-1style-full-bar" />
                    </div>
                </div> */}
                <hr className="separator-full-menu" />
                <div className="container-master-menu-options">
                    {OptionsMenu.map((option, id) =>{
                        return(
                            <div className="container-option" onClick={() => Options(option.name)}>
                                <div className="container-icon-option">
                                    <FontAwesomeIcon icon={option.icon} className="icon-menu-option" />
                                </div>
                                <p className="text-menu-option">{option.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`container-full-menu-bg ${ShowMenu ? "active-menu-bg" : ""}`}/>
        </React.Fragment>
    )
}

export default Header;