import React, { useState, useContext, useEffect } from 'react'
import Context from '../GlobalState/context';
import Header from '../Views/Components/Header'
import Hammer from 'react-hammerjs'
import { withRouter } from 'react-router-dom'


/* Screens */
import Principal from './Screens/Principal'
import Acumular from './Screens/Acumular'
import Categorias from './Screens/Categorias'
import Promociones from './Screens/Promociones'
import Perfil from './Screens/Perfil'
import Ubicacion from './Screens/Ubicacion'
import Ayuda from './Screens/Ayuda'
import AcumularFinal from './Screens/AcumularFinal'
import Tienda from './Screens/Tienda'
import firebase from 'firebase'


const Home = props =>{

    const {state, actions} = useContext(Context)
    const db = firebase.firestore()
    const [ShowMenu, setShowMenu] = useState(false)

    const clean = () => {
        setShowMenu(false)
    }
    
    const SwipeOn = () =>{
        setShowMenu(true)
        setTimeout(clean, 50);
    }

    const SwipeOff = () =>{
        setShowMenu("off")
        setTimeout(clean, 50);
    }

    useEffect(() => {
        state.fireInit.auth().onAuthStateChanged(user => {
            if (user) {
                db.doc(`usuarios/${user.uid}/`).onSnapshot(res => {
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
                    
            }
        })    
    }, []);

    return(
        <React.Fragment>
            {state.menu_option === "Cerrar Sesión" ? 
                (
                    actions({ type: "setState", payload: { ...state, menu_option: 'Inicio' } }),
                    state.fireInit.auth().signOut(),
                    props.history.push('/')
                )
            :
            <React.Fragment>
                <Header title={state.menu_option} Swipe={ShowMenu} />
                <Hammer onSwipe={SwipeOn} direction={"DIRECTION_RIGHT"}>
                    <div className="full-screen">
                        <Hammer onSwipe={SwipeOff} direction={"DIRECTION_LEFT"}>
                            <div className="full-screen">
                                {
                                state.menu_option === "Inicio" ?
                                    <Principal />
                                : state.menu_option === "Acumular" ? 
                                    <Acumular />
                                : state.menu_option === "AcumularFinal" ? 
                                    <AcumularFinal />
                                : state.menu_option === "Categorias" ?
                                    <Categorias />
                                : state.menu_option === "Promociones" ?
                                    <Promociones />
                                : state.menu_option === "Perfil" ?
                                    <Perfil />
                                : state.menu_option === "Ubicacion" ?
                                    <Ubicacion />
                                : state.menu_option === "Ayuda" ?
                                    <Ayuda />
                                : state.menu_option === "Tienda" ?
                                    <Tienda />
                                : <div/>
                                }
                            </div>
                        </Hammer>
                    </div>
                </Hammer>
            </React.Fragment>
            }
        </React.Fragment>
    )
}

export default withRouter(Home);