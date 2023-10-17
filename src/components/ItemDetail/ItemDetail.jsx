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
        const item = {id, nombre, precio, img};
        agregarProducto(item, cantidad)
    }
    return (
        <div className="detalle">
            <div className="detalleProducto">
                <img src={img} alt={nombre} className="detalleImagen"/>
                <h2 className="detalleNombre">{nombre}</h2>
                <h3 className="detallePrecio">${precio}</h3>
                <h3 className="detalleId">ID: {id}</h3>
                <p className="detalleDescripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {
                    agregar > 0 ? (<Link to={"/cart"} className="terminarCompra"> Terminar Compra </Link>):(<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
            </div>
        </div>
    )
}

export default ItemDetail