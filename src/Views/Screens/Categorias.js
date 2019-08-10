import React, {useState} from 'react'
import '../../Styles/Views/Categorias.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch, faUtensils, faTshirt, faFish } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd';

const categories = [
    {name: "Restaurants", icon: faUtensils, img: "restaurant"},
    {name: "Ropa", icon: faTshirt, img: "ropa"},
    {name: "Mercado", icon: faFish, img: "verduras"},
    {name: "Mercado", icon: faFish, img: "verduras"},
    {name: "Mercado", icon: faFish, img: "verduras"},
    {name: "Mercado", icon: faFish, img: "verduras"}
]

const Categorias = () =>{

    const [Categorie, setCategorie] = useState("")

    console.log(Categorie)

    return(
        <div className="container-master">
            <div className="container-master-categorias">
                <div className="container-search-categories">
                    <Input placeholder="Buscar negocios" />
                </div>
                <div className="container-categories-categories">
                    {categories.map((categorie, id) => {
                        return(
                        <div className="container-one-categorie-categories" onClick={() => setCategorie(categorie.name)}>
                            <span className={`container-bg-categorie-categories ${Categorie === categorie.name ? "bg-active" : ""}`} />
                            <img src={require(`../../assets/demo-img/${categorie.img}.jpg`)} alt={id} className="img-categorie"></img>
                            <div className="gradient-categorie" />
                            <p className="text-one-categorie-categories"><FontAwesomeIcon icon={categorie.icon}/> {categorie.name}</p>
                        </div>
                        )
                    })}
                </div>
                <hr className="separator-categories" />
            </div>
        </div>
    )
}

export default Categorias;