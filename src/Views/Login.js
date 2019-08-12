import React, {useState, useContext, useEffect} from 'react'
import '../Styles/Views/login.css'
import '../Styles/MediaQuerys.css'
import GasIcon from '../assets/gasicon.svg'
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { withRouter } from 'react-router-dom'
import Context from '../GlobalState/context';
import { Icon } from 'antd'
import firebase from 'firebase'


const Login = props =>{

    const {state, actions} = useContext(Context)
    const [showLogin, setShowLogin] = useState(false)
    const db = firebase.firestore()
    const [userData, setUserData] = useState({
        user: "",
        password: ""
    })

    useEffect(() => {
        state.fireInit.auth().onAuthStateChanged(user => {
            if (user) {
                db.doc(`usuarios/${user.uid}/`).get()
                    .then(res => {
                        console.log(user.uid)
                        actions({
                            type: 'setState',
                            payload: {
                                ...state,
                                personal_info: {
                                    points: res.data().points,
                                    uid: user.uid
                                }
                            }
                        })
                    })
                    .then(() => props.history.push('home'))

            } else {
                setShowLogin(true)
            }
        })
    }, [])
    
    const checkPreviousAuth = () => {
        console.log('fo')
        
    }

    const logIn = () => {
        state.fireInit.auth().signInWithEmailAndPassword(userData.user, userData.password)
        .then(() => {
            props.history.push('home')
        })
        .catch(err => {
            alert("Campos invalidos")
        })
    }

    return(
        showLogin ? 
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
                        <Input onChange={e => setUserData({ ...userData, user: e.target.value })} placeholder="Correo electronico" />
                        <Input onChange={e => setUserData({ ...userData, password: e.target.value })} placeholder="Contraseña" type="password" />
                    </div>
                    <div className="container-buttoms-login">
                        <div className="container-first-buttom-login" onClick={logIn}>
                            <div className="container-buttom-login">
                                <p><FontAwesomeIcon icon={faSignInAlt} /> Entrar</p>
                            </div>
                        </div>
                        <div>
                            <div className="container-buttom-login">
                                <p><FontAwesomeIcon icon={faUserPlus} /> Registrarse</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="recover-password-login">¿Olvido su Contraseña?</p>
                    </div>
                    <div className="container-master-google-login">
                        <div>
                            <div className="container-google-login">
                                <p>Ingresar con <FontAwesomeIcon icon={faGooglePlusG} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
            <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color: 'cyan', fontWeight: 'bolder', fontSize:'1.2em'}}> Iniciando </h4>
                <Icon style={{color: 'cyan', fontSize:'4em'}} type='loading'/>
            </div>
    )
}

export default withRouter(Login);