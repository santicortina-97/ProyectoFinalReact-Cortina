import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)

    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
    return (
        <div className="cart">
            <Link to={"/cart"}>
                <img className='imgCarrito' src={imgCarrito} alt="" />
                {
                    cantidadTotal > 0 && <strong className='cantidad'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget