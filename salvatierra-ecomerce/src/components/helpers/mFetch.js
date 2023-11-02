const products = [
    {id: "1", name: "producto 1", category: "remeras", price: 1000, stock: 500, description: "prenda de vestir de alta calidad", imageUrl: "https://topperarg.vtexassets.com/arquivos/ids/269370-1200-1200?width=1200&height=1200&aspect=true"},
    {id: "2", name: "producto 2", category: "remeras", price: 1000, stock: 500, description: "prenda de vestir de alta calidad", imageUrl: "https://topperarg.vtexassets.com/arquivos/ids/269370-1200-1200?width=1200&height=1200&aspect=true"},
    {id: "3", name: "producto 3", category: "remeras", price: 1000, stock: 500, description: "prenda de vestir de alta calidad", imageUrl: "https://topperarg.vtexassets.com/arquivos/ids/269370-1200-1200?width=1200&height=1200&aspect=true"},
    {id: "4", name: "producto 4", category: "remeras", price: 1000, stock: 500, description: "prenda de vestir de alta calidad", imageUrl: "https://topperarg.vtexassets.com/arquivos/ids/269370-1200-1200?width=1200&height=1200&aspect=true"},
    {id: "5", name: "producto 5", category: "remeras", price: 1000, stock: 500, description: "prenda de vestir de alta calidad", imageUrl: "https://topperarg.vtexassets.com/arquivos/ids/269370-1200-1200?width=1200&height=1200&aspect=true"},
]


export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res({products})
        }, 3000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        })
    })
}