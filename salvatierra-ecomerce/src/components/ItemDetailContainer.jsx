import { useEffect, useState } from "react"
import { getProductById } from "./helpers/mFetch"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {pid} = useParams()
    useEffect (() => {
        getProductById(pid)
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    
    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}




export default ItemDetailContainer