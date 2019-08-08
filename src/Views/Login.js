import React, {useState} from 'react'
import { Redirect } from 'react-router';
import '../Styles/Views/login.css'
import '../Styles/MediaQuerys.css'
import GasIcon from '../assets/gasicon.svg'
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'


const Login = () =>{

    const [login, setLogin] = useState(true)

    const CheckLogin = () =>{
        
    }

    return(
        <div className="container-master-login">
            <div className="container-login">
                <div>
                    <img src={GasIcon} alt="logo" className="gas-icon-login" />
                </div>
                <div className="container-principal-text-login">
                    <p className="text-name-login">Albos</p>
                    <p className="text-subject-login">Recarga. Acumula. Compra</p>
                </div>
                <div className="container-inputs-login">
                    <Input placeholder="Correo electronico" />
                    <Input placeholder="Contraseña" type="password" />
                </div>
                <div className="container-buttoms-login">
                    <div className="container-first-buttom-login" onClick={CheckLogin}>
                        <div className="container-buttom-login">
                            <p><FontAwesomeIcon icon={faSignInAlt}/> Entrar</p>
                        </div>
                    </div>
                    <div>
                        <div className="container-buttom-login">
                            <p><FontAwesomeIcon icon={faUserPlus}/> Registrarse</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="recover-password-login">¿Olvido su Contraseña?</p>
                </div>
                <div className="container-master-google-login">
                    <div>
                        <div className="container-google-login">
                            <p>Ingresar con <FontAwesomeIcon icon={faGooglePlusG}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;