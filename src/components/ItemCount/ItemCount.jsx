import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
const [contador, setContador] = useState(inicial);

const incrementar = () => {
    if(contador < stock){
        setContador(contador + 1);
    }
}

const decrementar = () => {
    if(contador > inicial){
        setContador(contador - 1);
    }
}


return (
<>
    <div className='agregar'>
        <button onClick={decrementar}> - </button>
        <p>{contador}</p>
        <button onClick={incrementar}> + </button>
    </div>
    <button onClick={()=> funcionAgregar(contador)} className='agregarCarrito'>Agregar al Carrito</button>
</>

)
}

export default ItemCount