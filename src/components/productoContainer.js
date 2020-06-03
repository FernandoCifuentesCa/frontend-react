import React from 'react'
import Producto from './producto'
import {getProductos, getProductoXid} from '../services/productos'
import Title from './Title'
import Search from './Search'
import PostForm from './PostForm'


class ProductContainer extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            productos: [],
            isFetch: true,
        }
    }

    async componentDidMount () {
        const ProductosJson = await getProductos()
        this.setState({ productos: ProductosJson , isFetch: false})
    }

    /*handleSearch= async (search) => {
        const ProductosJson = await getProductoXid(search)
        this.setState({ productos : ProductosJson})
    }
*/
    render() {

        const{isFetch,productos} = this.state

        if(isFetch){
            return'loading...'
        }

        return (

            <>
            <Title>Sistema de inventario</Title>
            <PostForm/>
            <Producto productos={productos}/>
           </>


        )

    }

}

export default ProductContainer