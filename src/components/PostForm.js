import React,{ Component} from 'react'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export class PostForm extends Component {
    constructor(props){
        super(props)

        this.state= {
            id: '',
            nombre_producto: '',
            referencia: '',
            precio: '',
            peso: '',
            categoria: '',
            stock: '',
            fecha_creacion: '',
            fecha_venta: ''

        }
    }

    changeHandler= (e)=> {
        this.setState( { [e.target.name]:e.target.value } )
    }


    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost/RestApi/post.php',this.state)
        .then(response =>{
            console.log(response)
        })
    }

    render(){
        const {id,nombre_producto, referencia,precio,peso,categoria,stock,fecha_creacion,fecha_venta} = this.state
        return (
            <div>
                <form align="center" onSubmit={this.submitHandler}>
                    <div>
                        <label align="left">ID:
                        <input type="text" name="id" value={id} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Nombre producto:
                        <input type="text" name="nombre_producto" value={nombre_producto} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Referencia:
                        <input type="text" name="referencia" value={referencia} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Precio:
                        <input type="text" name="precio" value={precio} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Peso:
                        <input type="text" name="peso" value={peso} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Categoria:
                        <input type="text" name="categoria" value={categoria} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Stock:
                        <input type="text" name="stock" value={stock} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Fecha creacion:
                        <input type="text" name="fecha_creacion" value={fecha_creacion} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div>
                        <label align="left">Fecha venta
                        <input type="text" name="fecha_venta" value={fecha_venta} onChange={this.changeHandler} />
                        </label>
                    </div>
                    <button type="submit" >Ingresar producto</button>
                </form>
            </div>
        )
    }
}

export default PostForm