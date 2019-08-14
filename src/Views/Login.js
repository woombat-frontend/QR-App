import React, {useState, useContext, useEffect} from 'react'
import '../Styles/Views/login.css'
import '../Styles/MediaQuerys.css'
import GasIcon from '../assets/gasicon.svg'
import GasIconAdmin from '../assets/gasiconadmin.svg'
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { withRouter } from 'react-router-dom'
import Context from '../GlobalState/context';
import { Icon } from 'antd'
import firebase from 'firebase'
import Hammer from 'react-hammerjs'


const Login = props =>{

    const {state, actions} = useContext(Context)
    const [showLogin, setShowLogin] = useState(true)
    const db = firebase.firestore()
    const [userData, setUserData] = useState({
        user: "",
        password: ""
    })
    const [adminData, setAdminData] = useState({
        admin: "",
        password: ""
    })
    const renderOptions = ['user', 'admin', 'commerce', 'superadmin']
    const [currentLogin, setCurrentLogin] = useState('')
    const [optionIndex, setOptionIndex] = useState(0)

    // useEffect(() => {
    //     state.fireInit.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             db.doc(`usuarios/${user.uid}/`).get()
    //                 .then(res => {       
    //                     actions({
    //                         type: 'setState',
    //                         payload: {
    //                             ...state,
    //                             personal_info: {
    //                                 points: res.data().points,
    //                                 uid: user.uid,
    //                                 type_user: 'user'
    //                             }
    //                         }
    //                     })
    //                 })
    //                 .then(() => props.history.push('home'))
    //         } else {
    //             setShowLogin(true)
    //         }
    //     })
    //     setCurrentLogin(renderOptions[optionIndex])
    // }, [])
    
    const checkPreviousAuth = () => {
        console.log('fo')
        
    }

    const logIn = role => {
        role === 'user' ?
            state.fireInit.auth().signInWithEmailAndPassword(userData.user, userData.password)
                .then(async () => {
                    await actions({
                        type: 'setState',
                        payload: {
                            ...state,
                            type_user: 'user'
                        }
                    })
                   await props.history.push('home')
                })
                .catch(err => {
                    alert("Campos invalidos")
                })
        :
            state.fireInit.auth().signInWithEmailAndPassword(adminData.admin, adminData.password)
                .then(async () => {
                    await actions({
                        type: 'setState',
                        payload: {
                            ...state,
                            type_user: 'admin'
                        }
                    })
                    await props.history.push('home')
                })
                .catch(err => {
                    alert("Campos invalidos")
                })
    }


    const changeLogin = async option => {
        await option === 'right' ? setOptionIndex(optionIndex-1) : setOptionIndex(optionIndex+1)
        await setCurrentLogin(renderOptions[optionIndex]) 
    }

    return(
        showLogin && optionIndex === 0 ? 
            <Hammer onSwipe={() => changeLogin('right')} direction={"DIRECTION_RIGHT"}>
                <div>
                    <Hammer onSwipe={() => changeLogin('left')} direction={"DIRECTION_LEFT"}>
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
                                    <div className="container-first-buttom-login" onClick={()=>logIn('user')}>
                                        <div className="container-buttom-login">
                                            <p><FontAwesomeIcon icon={faSignInAlt} /> Entrar</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={()=>state.fireInit.auth().signOut()} className="container-buttom-login">
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
                    </Hammer>
                </div>
            </Hammer>
        : showLogin && optionIndex === 1 ? 
            <Hammer onSwipe={() => changeLogin('right')} direction={"DIRECTION_RIGHT"}>
                <div>
                    <Hammer onSwipe={() => changeLogin('left')} direction={"DIRECTION_LEFT"}>
                        <div className="container-master-login">
                            <div className="container-login">
                                <div>
                                    <img src={GasIconAdmin} alt="logo" className="gas-icon-login-admin" />
                                </div>
                                <div className="container-principal-text-login">
                                    <p className="text-name-login">Albos</p>
                                    <p className="text-subject-login">Recarga. Acumula. Compra</p>
                                </div>
                                <div className="container-inputs-login">
                                    <Input onChange={e => setAdminData({ ...adminData, admin: e.target.value })} placeholder="Correo electronico" />
                                    <Input onChange={e => setAdminData({ ...adminData, password: e.target.value })} placeholder="Contraseña" type="password" />
                                </div>
                                <div className="container-buttoms-login">
                                    <div className="container-first-buttom-login" onClick={()=>logIn('admin')}>
                                        <div className="container-buttom-login">
                                            <p><FontAwesomeIcon icon={faSignInAlt} /> Entrar</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div onClick={() => console.log(optionIndex)} className="container-buttom-login">
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
                                            <p onClick={()=>console.log(adminData)}>Ingresar con <FontAwesomeIcon icon={faGooglePlusG} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Hammer>
                </div>
            </Hammer>
        :
            <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color: 'cyan', fontWeight: 'bolder', fontSize:'1.2em'}}> Iniciando </h4>
                <Icon style={{color: 'cyan', fontSize:'4em'}} type='loading'/>
            </div>
    )
}

export default withRouter(Login);