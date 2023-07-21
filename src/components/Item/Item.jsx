import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img, stock}) => {
    return (
        <div className="card">
                <img src={img} alt={nombre} />
                <h3>{nombre}</h3>
                <p>Stock: {stock}</p>
                <p>ID: {id}</p>
                <p className="precio">${precio}</p>
                <Link to={`/item/${id}`} className="button">
                <button >Ver Detalles</button>
                </Link>
        </div>
    )
}

export default Item