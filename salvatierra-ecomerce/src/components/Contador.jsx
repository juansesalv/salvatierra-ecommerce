import { useState } from "react";

const Contador = ({stock, inicial, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(inicial)
    const incrementar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }
    const reducir =() => {
        if(cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div>
            <div>
                <button onClick={reducir}>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={() => agregarCarrito(cantidad)} disabled={!stock}>
                    agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default Contador