import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { CarritoContext } from "../../context/CarritoContext"

const ItemDetail = ({id, nombre, precio, img, stock}) => {
    const [agregar, setAgregar] = useState(0)
    const {agregarProducto} = useContext(CarritoContext)
    const manejadorCantidad = (cantidad) => {
        setAgregar(cantidad)
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad)
    }
    return (
        <div className="detalle">
            <div className="detalleProducto">
                <img src={img} alt={nombre} />
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
                <h3>ID: {id}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {
                    agregar > 0 ? (<Link to={"/cart"} className="terminarCompra"> Terminar Compra </Link>):(<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
            </div>
        </div>
    )
}

export default ItemDetail