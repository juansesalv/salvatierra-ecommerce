import Contador from "./Contador"


const ItemDetail = ({id, name, category, price, stock, description, imageUrl}) => {
    return(
        <>
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={imageUrl} alt={name} className="ItemImg" />
            </picture>
            <body>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Description: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </body>
            <footer>
            <Contador inicial={1} stock={10} agregarCarrito={(cantidad) => console.log("cantidad agregada", cantidad)}/>
            </footer>
        </article>
        </>
    )
}

export default ItemDetail