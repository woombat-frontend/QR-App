import React, { useState, useEffect, useContext } from 'react'
import Context from '../../GlobalState/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser, faFolder, faMoneyBillAlt, faAddressCard, faMap, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import '../../Styles/Header.css'
import Hammer from 'react-hammerjs'


const OptionsMenu = [
    {name: "Inicio", icon: faHome},
    {name: "Acumular", icon: faUser},
    {name: "Categorias", icon: faFolder},
    {name: "Promociones", icon: faMoneyBillAlt},
    {name: "Perfil", icon: faAddressCard},
    {name: "Ubicación", icon: faMap},
    {name: "Ayuda", icon: faQuestionCircle},
    {name: "Cerrar Sesión", icon: faSignOutAlt}
]

const Header = props =>{

    const {state, actions} = useContext(Context)

    const [ShowMenu, setShowMenu] = useState(false)

    const ActiveMenu = () =>{
        setShowMenu(true)
        let body = document.getElementsByTagName("body")
        body[0].classList.add("no-scroll")
    }

    const CloseMenu = () =>{
        setShowMenu(false)
        let body = document.getElementsByTagName("body")
        body[0].classList.remove("no-scroll")
    }

    const Options = nameOption =>{
        actions({type: "setState", payload: {...state, menu_option: nameOption }})
        CloseMenu()
    }

    useEffect (() =>{
        if (props.Swipe) {
            ActiveMenu() 
        }
        if (props.Swipe === "off") {
            CloseMenu() 
        }
    })

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
            <Hammer onSwipe={CloseMenu} direction={"DIRECTION_LEFT"}>
                <div className={`container-full-menu ${ShowMenu ? "active-menu" : ""}`}>
                    <div className="container-bars-full-menu">
                        <div className="container-close-menu" onClick={CloseMenu}>
                            <FontAwesomeIcon icon={faBars} className="bars-full-menu" />
                        </div>
                    </div>
                    <div className="spacing-left-full-menu">
                        <p className="text-menu">Menú</p>
                        <div className="points-container-menu-full">
                            <p className="text-points-title">Puntos Acumulados</p>
                            <p className="text-points">3000</p>
                        </div>
                    </div>
                    <hr className="separator-full-menu" />
                    <div className="container-master-menu-options">
                        {OptionsMenu.map((option, id) =>{
                            return(
                                <div className="container-option" onClick={() => Options(option.name)}>
                                    <div className="container-icon-option">
                                        <FontAwesomeIcon icon={option.icon} className="icon-menu-option" />
                                    </div>
                                    <p className={`text-menu-option ${props.title === option.name ? "active-menu-full" : ""}`}>{option.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Hammer>
            <div className={`container-full-menu-bg ${ShowMenu ? "active-menu-bg" : ""}`}/>
        </React.Fragment>
    )
}

export default Header;