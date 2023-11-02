

import Row from "react-bootstrap/Row"
import ItemList from "./ItemList"
import { mFetch } from "./helpers/mFetch"
import { useEffect, useState } from "react"



    function itemListContainer ({greeting}) {
        const [products, setProducts] = useState([])
        useEffect(()=> {
            mFetch()
            .then(resultado => setProducts(resultado.products))
            .finally(()=> console.log("siempre pero al ultimo"))
        }, [])
    console.log(products) 
    return (
        <>
        <center>
            <h3>{greeting}</h3>
        </center>
        <div>
            <ItemList products={products}/>
        </div>
        </>
    )
}

export default itemListContainer    