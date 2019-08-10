import React, { useState, useContext } from 'react'
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



const Home = props =>{

    const {state, actions} = useContext(Context)

    const [ShowMenu, setShowMenu] = useState(false)

    const clean = () =>{
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

    return(
        <React.Fragment>
            {state.menu_option === "Cerrar Sesión" ? 
            props.history.push('/')
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