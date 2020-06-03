const baseUrl = 'http://localhost/RestApi/'

export async function getProductos (){
    const response = await fetch( `${baseUrl}post.php`)
    const ProductosJson = await response.json()
    return ProductosJson
    
}

export async function getProductoXid (q) {
    const response= await fetch(`${baseUrl}post.php?id=${q}`)
    const ProductosJson = await response.json()
    return ProductosJson
}

export default {
    getProductos,
    getProductoXid
}