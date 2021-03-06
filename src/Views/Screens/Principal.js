import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch, faUtensils, faTshirt, faFish } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/Views/Home.css'
import Context from '../../GlobalState/context';
import firebase from 'firebase'

const locals = [
    {name: "Hamburguesas el Pilon", discont: "30%", points: "5000", img: "pilon"},
    {name: "Tiendas KOAJ", discont: "20%", points: "8000", img: "koaj"},
    {name: "Tiendas KOAJ", discont: "20%", points: "8000", img: "koaj"},
    {name: "Tiendas KOAJ", discont: "20%", points: "8000", img: "koaj"}
]

const categories = [
    {name: "Restaurantes", icon: faUtensils, img: "restaurant"},
    {name: "Ropa", icon: faTshirt, img: "ropa"},
    {name: "Mercado", icon: faFish, img: "verduras"}
]

const Principal = () => {

    const {state, actions} = useContext(Context)
    const db = firebase.firestore()
    const [localPoints, setLocalPoints] = useState(null)

   useEffect(() => {
       state.fireInit.auth().onAuthStateChanged(user => {
           if (user) { 
               console.log("principal", state.type_user)
               state.type_user === 'user' ? 
                   db.doc(`usuarios/${user.uid}`).get()
                       .then(res => {
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
                :
                   db.doc(`usuarios/${user.uid}`).get()
                       .then(res => {
                           actions({
                               type: 'setState',
                               payload: {
                                   ...state,
                                   personal_info: {
                                       uid: user.uid,
                                       name: res.data().name,
                                       role: res.data().role
                                   }
                               }
                           })
                       })
           }
       })
   }, []);


    return(
        <div className="container-master">
            <div className="container-points-home">
                <p onClick={()=> console.log(state.personal_info)} className="text-points-home">Puntos Acumulados</p>
                <p className="actual-points-home">{state.personal_info.points}</p>
                <div onClick={()=> actions({ type: "setState", payload: { ...state, menu_option: "Acumular" } })} className="buttom-acumular-puntos-home">
                    <p className="text-acumular-puntos-home"><FontAwesomeIcon icon={faPlusCircle}/> Acumular</p>
                </div>
            </div>
            <hr className="separator" />
            <div className="container-near-you-home">
                <p className="text-universal-categories">Cerca de ti</p>
                {locals.slice(0,2).map((local,id) =>{
                    return(
                    <div className="container-near-you-locals" onClick={()=> actions({ type: "setState", payload: { ...state, menu_option: "Tienda" } })}>
                        <div className="container-local-principal">
                            <img src={require(`../../assets/demo-img/${local.img}.jpg`)} alt={id} className="img-local" />
                        </div>
                        <div className="container-details-local">
                            <p className="text-normal-detail-local">{local.name}</p>
                            <p className="text-other-detail-local">{local.discont} de descuento</p>
                            <p className="text-normal-detail-local">{local.points} puntos</p>
                        </div>
                    </div>
                    )
                })}
                <div className="container-master-show-more">
                    <div className="container-buttom-show-more" onClick={() => actions({ type: "setState", payload: { ...state, menu_option: "Promociones" } })}>
                        <p><FontAwesomeIcon icon={faSearch}/> Ver Mas</p>
                    </div>
                </div>
            </div>
            <hr className="separator" />
            <div className="container-categories">
                <p className="text-universal-categories">Nuestras Categorias</p>
                <div className="container-all-categories">
                    <div className="container-categorie">
                        {categories.map((categorie, id) => {
                            return(
                            <div className="container-one-categorie" onClick={() => actions({ type: "setState", payload: { ...state, menu_option: "Categorias" } })}>
                                <img src={require(`../../assets/demo-img/${categorie.img}.jpg`)} alt={id} className="img-categorie"></img>
                                <div className="gradient-categorie" />
                                <p className="text-one-categorie"><FontAwesomeIcon icon={categorie.icon}/> {categorie.name}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr className="separator" />
            <div>
                <p className="text-universal-categories">Promociones</p>
            </div>
        </div>
    )
}

export default Principal;