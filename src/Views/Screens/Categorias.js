import React, {useState} from 'react'
import '../../Styles/Views/Categorias.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSearch, faUtensils, faTshirt, faFish } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd';


const Categorias = () =>{

    const categories = [
        {name: "Restaurants", icon: faUtensils, img: "restaurant"},
        {name: "Ropa", icon: faTshirt, img: "ropa"},
        {name: "Mercado", icon: faFish, img: "verduras"}
    ]

    const locals = [
        {name: "Hamburguesas el Pilon", discont: "30%", points: "5000", img: "pilon", categorie: "Restaurants"},
        {name: "Tiendas KOAJ", discont: "20%", points: "8000", img: "koaj", categorie: "Ropa"},
        {name: "Tiendas Pepe Panga", discont: "35%", points: "50000", img: "pepeganga", categorie: "Ropa"},
        {name: "Tiendas KOAJ", discont: "20%", points: "8000", img: "koaj", categorie: "Ropa"},
        {name: "Surtifruver", discont: "15%", points: "5000", img: "surtifruver", categorie: "Mercado"}
    ]

    const [Categorie, setCategorie] = useState("")
    const [LocalsFinal, setLocalsFinal] = useState(locals)
    const [placeholderInput, setPlacerHolderInput] = useState("Buscar Negocios")

    const CleanAll = () =>{
        setCategorie("")
        setLocalsFinal(locals)
        setPlacerHolderInput("Buscar Negocios")
    }

    const ClickCategorie = name =>{
        if (Categorie && Categorie === name) {
            CleanAll()
        }
        else{
            setCategorie(name)
            setPlacerHolderInput(`Buscar en ${name}`)
            const filterbycategorie = locals.filter(local => local.categorie === name)
            setLocalsFinal(filterbycategorie)
        }
    }

    const FilterbyInput = value =>{
        if (!Categorie) {
            if (!value) {
                setLocalsFinal(locals)
            }
            else{
                let LowerInput = value.toLowerCase()
                setLocalsFinal(locals.filter(local => local.name.toLowerCase().includes(LowerInput)))
            }
        }
        else{
            if (!value) {
                const filterbycategorie = locals.filter(local => local.categorie === Categorie)
                setLocalsFinal(filterbycategorie)
            }
            else{
                let LowerInput = value.toLowerCase()
                const filtercategorie = locals.filter(local => local.categorie === Categorie)
                setLocalsFinal(filtercategorie.filter(local => local.name.toLowerCase().includes(LowerInput)))
            }
        }
    }

    return(
        <div className="container-master">
            <div className="container-master-categorias">
                <div className="container-search-categories">
                    <Input placeholder={placeholderInput} onChange={e => FilterbyInput(e.target.value)} />
                </div>
                <div className="container-categories-categories">
                    {categories.map((categorie, id) => {
                        return(
                        <div className="container-one-categorie-categories" onClick={() => ClickCategorie(categorie.name)}>
                            <span className={`container-bg-categorie-categories ${Categorie === categorie.name ? "bg-active" : ""}`} />
                            <img src={require(`../../assets/demo-img/${categorie.img}.jpg`)} alt={id} className="img-categorie"></img>
                            <div className="gradient-categorie" />
                            <p className="text-one-categorie-categories"><FontAwesomeIcon icon={categorie.icon}/> {categorie.name}</p>
                        </div>
                        )
                    })}
                </div>
                <hr className="separator-categories" />
                <div className="container-master-locals-categorias">
                    {LocalsFinal.map((local,id) =>{
                        return(
                        <div className="container-local-categorias">
                            <div>
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
                </div>
            </div>
        </div>
    )
}

export default Categorias;