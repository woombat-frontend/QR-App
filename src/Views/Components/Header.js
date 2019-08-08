import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/Header.css'

const Header = props =>{
    return(
        <div className="header-fixed">
            <div className="container-master-header">
                <div className="container-left-header">
                    <FontAwesomeIcon icon={faBars} className="bar-icon-header" />
                </div>
                <div className="container-right-header">
                    <p className="text-header-right">{props.title}</p>
                </div>
                <div className="container-full">
                    <p>test</p>
                </div>
            </div>
        </div>
    )
}

export default Header;