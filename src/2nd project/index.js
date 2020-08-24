import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style.css'

const Product = ({ photo, header, price, description, click }) => (
    <div className="product" onClick={click}>
        <img className="product__photo" src={photo} alt=""/>
        
        <div className="product__information">
            <div className="product__header">{header}</div>
            <div className="product__price">Цена:{price} рублей</div>
            <div className="product__description">{description}</div>
        </div>
    </div>
)

Product.propTypes = {
    photo: PropTypes.string,
    header: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    click: PropTypes.func
}

Product.defaultProps = {
    photo: "/img/0.jpg",
    header: "Неизвестный продукт",
    price: 0,
    description: "...",
    click: () => alert('Неизвестный продукт')
}

const app = (
    <Fragment>
        <Product/>
        <Product
            photo="/img/1.jpg"
            header="Кроссовки"
            price={1000}
            description="Таким образом постоянное информационно-пропагандистское обеспечение 
            нашей деятельности играет важную роль в формировании соответствующий условий активизации. 
            Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское 
            обеспечение нашей деятельности играет важную роль в формировании форм развития."
            click={() => alert('Кроссовки')}
        />
        <Product
            photo="/img/2.jpg"
            header="Фотоаппарат"
            price={2000}
            description="Таким образом постоянное информационно-пропагандистское обеспечение 
            нашей деятельности играет важную роль в формировании соответствующий условий активизации. 
            Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское 
            обеспечение нашей деятельности играет важную роль в формировании форм развития."
            click={() => alert('Фотоаппарат')}
        />
        <Product
            photo="/img/3.jpg"
            header="Наушники"
            price={3000}
            description="Таким образом постоянное информационно-пропагандистское обеспечение 
            нашей деятельности играет важную роль в формировании соответствующий условий активизации. 
            Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское 
            обеспечение нашей деятельности играет важную роль в формировании форм развития."
            click={() => alert('Наушники')}
        />
        <Product
            photo="/img/4.jpg"
            header="Часы"
            price={4000}
            description="Таким образом постоянное информационно-пропагандистское обеспечение 
            нашей деятельности играет важную роль в формировании соответствующий условий активизации. 
            Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское 
            обеспечение нашей деятельности играет важную роль в формировании форм развития."
            click={() => alert('Часы')}
        />
    </Fragment>
)


const root = document.getElementById('root')
ReactDOM.render(app, root)

// const Hello = ({name, children}) => (
//     <div>
//         <div>Привет, мир!</div>
//         <div>Привет, {name}!</div>
//         {children}
//     </div>    
// )

// Hello.propTypes = {
//     name: PropTypes.string.isRequired,
// }

// Hello.defaultProps = {
//     name: "нет имени"
// }

// const app = (
//     <Fragment>
//         <Hello name={5}></Hello>
//         <Hello></Hello>
//         <Hello name="Андрей"></Hello>
//         <Hello><div>Test</div></Hello>
//     </Fragment>   
// )

