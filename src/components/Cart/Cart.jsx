import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CarritoContext)

    if (cantidadTotal === 0){
        return(
            <div>
                <h2 className="carritoVacio"> Carrito Vacío </h2>
                <Link to="/" className="volver"> Volver </Link>
            </div>
        )
        
        
    }

return (
    <div>
        {carrito.map((producto) => (<CartItem key={producto.id} {...producto}/>))}
        <div className="totalCarrito">
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout" className="finalizar">Finalizar Compra</Link>
        </div>
    </div>
)
}

export default Cart