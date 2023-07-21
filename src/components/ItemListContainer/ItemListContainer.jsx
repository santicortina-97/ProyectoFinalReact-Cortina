import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
/* import { getProductos, getCategoria } from "../../asyncmock" */
import { useParams } from "react-router-dom"
//Importamos las funciones para trabajar con firebase
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/config"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();
    useEffect(() =>{
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
    }, [idCategoria])
    return (
        <div className='aviso'>
            <h2 style={{color:"black", textAlign:"center", fontSize:"40px"}}>Relojes</h2>
            <ItemList productos={productos}/>
        </div>
            
    )
}

export default ItemListContainer