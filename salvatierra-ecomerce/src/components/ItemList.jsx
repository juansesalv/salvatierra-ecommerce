import { Link } from "react-router-dom"





function ItemList ({products}) {
    return (
        <>
        <div className="d-flex justify-content-center align-item-center">
        {products.map(product => 
        
            <div className="card w-25 g-4 row-cols-md-2">
                    <img src={product.imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <p>Nombre: {product.name}</p>
                    <p>Categoria: {product.category}</p>
                    <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                <button className="btn btn-outline-dark w-100">detalle</button>
                </Link>
            </div>
            </div>
    )}
        </div>
        </>
    )
}


export default ItemList