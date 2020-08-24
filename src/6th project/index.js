import React, { Fragment, Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({
            products: [
                { id: 1, name: "Товар 1", price: 1000 },
                { id: 2, name: "Товар 2", price: 2000 },
                { id: 3, name: "Товар 3", price: 3000 },
                { id: 4, name: "Товар 4", price: 4000 },
                { id: 5, name: "Товар 5", price: 5000 }
            ]
        })
    }

    render() {
        const { products } = this.state
        return ( <
            table className = "products" >
            <
            thead >
            <
            tr >
            <
            th className = "products_th" > # < /th> <
            th className = "products_th" > Name < /th> <
            th className = "products_th" > Price < /th> <
            th className = "products_th" > Actions < /th> <
            /tr> <
            /thead> <
            /table>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render( < Products / > , root)