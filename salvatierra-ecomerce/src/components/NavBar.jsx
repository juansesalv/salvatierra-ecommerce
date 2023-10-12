import CartWidget from "./CartWidget"
function NavBar () {
    return (
        <nav>
            <h1>Abuela Artesana</h1>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Quienes Somos</li>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar