import React, { useState } from 'react'
import '../../Styles/Views/Perfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faSave } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleDown , faUserTag, faUserLock, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import User from '../../assets/demo-img/user.svg'
import { Input } from 'antd';


const Perfil = () =>{

    const [Option, setOption] = useState("")

    const SetOptionClick = option =>{
        Option === option ?
        setOption("")
        :
        setOption(option)
    }

    return(
        <div className="container-master">
            <div className="container-master-profile">
                <div className="container-photo-and-name">
                    <img className="img-style-profile" src={User} />
                    <p className="name-profile">Ronald Prato</p>
                    <p className="text-edit-photo"><FontAwesomeIcon icon={faEdit} /> Editar foto</p>
                </div>
                <div className="container-master-options">
                    <div>
                        <div className="container-option-profile" onClick={() => SetOptionClick("username")}>
                            <p className="text-option"><FontAwesomeIcon icon={faUserTag} /> Cambiar nombre de usuario</p>
                            {Option === "username" ?
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                            }
                        </div>
                        {Option === "username" ?
                        <div className="container-option-open">
                            <div className="container-option-input">
                                <p className="text-option-open"><FontAwesomeIcon icon={faInfoCircle} /> Nuevo nombre de usuario</p>
                                <Input placeholder="Ingrese nuevo nombre de usuario" />
                            </div>
                            <div className="container-master-buttom-option">
                                <div className="container-buttom-option">
                                    <p className="text-buttom-option"><FontAwesomeIcon icon={faSave} /> Aceptar</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div />
                        }
                        <hr className="separator-profile" />
                    </div>
                    <div>
                        <div className="container-option-profile" onClick={() => SetOptionClick("password")}>
                            <p className="text-option"><FontAwesomeIcon icon={faUserLock} /> Cambiar contraseña</p>
                            {Option === "password" ?
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                            }
                        </div>
                        {Option === "password" ?
                        <div className="container-option-open">
                            <div className="container-option-input">
                                <p className="text-option-open"><FontAwesomeIcon icon={faInfoCircle} /> Anterior Contraseña</p>
                                <Input placeholder="Ingrese anterior contraseña" type="password" />
                                <p className="text-option-open space-option"><FontAwesomeIcon icon={faInfoCircle} /> Nueva Contraseña</p>
                                <Input placeholder="Ingrese nueva contraseña" type="password" />
                            </div>
                            <div className="container-master-buttom-option">
                                <div className="container-buttom-option">
                                    <p className="text-buttom-option"><FontAwesomeIcon icon={faSave} /> Aceptar</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div />
                        }
                        <hr className="separator-profile" />
                    </div>
                    <div>
                        <div className="container-option-profile" onClick={() => SetOptionClick("email")}>
                            <p className="text-option"><FontAwesomeIcon icon={faEnvelope} /> Cambiar Correo Electrónico</p>
                            {Option === "email" ?
                            <div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </div>
                            }
                        </div>
                        {Option === "email" ? 
                        <div className="container-option-open">
                            <div className="container-option-input">
                                <p className="text-option-open"><FontAwesomeIcon icon={faInfoCircle} /> Cambiar Correo Electrónico</p>
                                <Input placeholder="Ingrese nuevo correo electronico" />
                            </div>
                            <div className="container-master-buttom-option">
                                <div className="container-buttom-option">
                                    <p className="text-buttom-option"><FontAwesomeIcon icon={faSave} /> Aceptar</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div />
                        }
                        <hr className="separator-profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;