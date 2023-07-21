import "./Checkout.css"
import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const formulario = (e) => {
        e.preventDefault()
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError ("Hay campos sin completar")
            return;
        }

        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto =>({ 
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        Promise.all(
            orden.items.map(async(productoOrden) =>{
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
        .then(() =>{
            addDoc(collection(db, "ordenes"), orden)
                .then((docRef) =>{
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                })
                .catch( (error) =>{
                    console.log("Error al crear la orden!", error);
                    setError("Error al crear la orden!");
                })
        })
        .catch((error) =>{
            console.log("Error al actualizar el stock!", error);
            setError("Error al actualizar el stock!");
        })
    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formulario} className="formulario">
                {carrito.map(producto => (
                    <div key={producto.id} className="checkout">
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>Precio: ${producto.item.precio * producto.cantidad}c/u</p>
                    </div>
                ))}
                <p className="total">Total: ${total}</p>
                <hr />
                    <div className="form">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div className="form">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div className="form">
                        <label htmlFor="">Telefono</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div className="form">
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form">
                        <label htmlFor="">Confirmar Email</label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>
                    {
                        error && <p style={{color: "red"}}>{error}</p>
                    }
                    <button type="submit">Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <strong className="ordenId"> ¡Gracias por tu compra! El numero de orden es {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout