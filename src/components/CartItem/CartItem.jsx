import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import "./CartItem.css"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div className="contenedor">
      <div className="carrito">
        <img src={item.img} alt="" />
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio * cantidad}</p>
        <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem