import React from 'react'
import '../../Styles/Views/Promociones.css'
import Ropa from '../../assets/demo-img/ropa.jpg'

const Promociones = () =>{

    const promotions = [
        {store: "Tiendas KOAJ", discont: "20", points: "5000", bg: "koaj"},
        {store: "Hambur. el Pilon", discont: "10", points: "3000", bg: "pilon"},
        {store: "Surtifruver", discont: "5", points: "1000", bg: "surtifruver"},
        {store: "Tiendas Pepeganga", discont: "20", points: "5000", bg: "pepeganga"}
    ]

    return(
        <div className="container-master">
            <div className="container-master-promociones">
                <div className="container-promociones-promotion">
                    <p className="text-promotion">Del 10 de Agosto al 10 de Septiembre</p>
                </div>
                <div className="container-master-promotions-full-bar">
                    {promotions.map(promotion =>{
                        return(
                        <div className="container-promotion-style-full-bar">
                            <div className="figure-style-full-bar" />
                            <div className="container-text-promotion-1style">
                                <div className="container-master-text-1style">
                                    <p className="text-promotion-1style">Promoción</p>
                                    <p>{promotion.store}</p>
                                    <p className="discount-text-1style">{promotion.discont}% de descuento</p>
                                    <p className="points-text-promotion-1style">{promotion.points} puntos</p>
                                </div>
                            </div>
                            <img src={Ropa} className="container-img-1style-full-bar" />
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Promociones;