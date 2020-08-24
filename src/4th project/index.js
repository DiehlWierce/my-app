import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes, { number} from 'prop-types'
import './style.css'

// Желательно использовать как можно меньше компонентов, построенных на классах

// class Counter extends Component {

    // более простое описание state
    // state = { count: 0 }

    // static PropTypes = {}
    // static defaultProps = {}

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    //     // привязываем контекст, дабы не потеряться в методах класса
    //     // this.dec = this.dec.bind(this)
    //     this.inc = this.inc.bind(this)
    // }

    // method dec()
    // здесь !!_count: count - 1_!! каунт объединяется с собой же.
    // Если бы была другая переменная перед двоеточием, то каунт перезаписался бы.
    
    // контекст можно привязать благодаря стрелочной функции
    // dec = () => this.setState(({ count }) => ({ count: count - 1 }))
    // inc = () => this.setState(({ count }) => ({ count: count + 1 }))

    // dec() {
    //     this.setState(({ count }) => {
    //         return {
    //             count: count - 1
    //         }
    //     })
    // }

    // inc() {
    //     this.setState(({ count }) => ({ count: count + 1 })) 
    // }

    // inc() {
    //     this.setState(({ count }) => {
    //         return {
    //             count: count + 1
    //         }
    //     })
    // }

//     render () {
//         const { count } = this.state
//         return (
//             <div className="counter">
//                 <button className="counter__btn" onClick={this.dec}>-</button>
//                 <div className="counter__count">{count}</div>
//                 <button className="counter__btn" onClick={this.inc}>+</button>
//             </div>
//         )
//     }
// }

const Counter = ({ count, dec, inc }) => (
    <div className="counter">
        <button className="counter__btn" onClick={dec}>-</button>
        <div className="counter__count">{count}</div>
        <button className="counter__btn" onClick={inc}>+</button>
    </div>
)

const Random = ({ number, random }) => (
    <button className="random" onClick={random}>{number}</button>
)

const Name = ({ name, nc }) => (
    <div className="name">
        <h2>My name is </h2>
        <button className="counter__btn" onClick={nc}>{name}</button>
    </div>
)

const words = ['Angel', 'Eyeball', 'Pizza', 'Angry', 'Fireworks', 'Pumpkin', 'Baby', 'Flower', 'Rainbow', 'Beard', 'Flying saucer', 
'Recycle', 'Bible', 'Giraffe', 'Sand castle', 'Bikini', 'Glasses', 'Snowflake', 'Book', 'High heel', 'Stairs', 'Bucket', 
'Ice cream cone', 'Starfish', 'Bumble bee', 'Igloo', 'Strawberry', 'Butterfly', 'Lady bug', 'Sun', 'Camera', 'Lamp', 'Tire', 
'Cat', 'Lion', 'Toast', 'Church', 'Mailbox', 'Toothbrush', 'Crayon', 'Night', 'Toothpaste', 'Dolphin', 'Nose', 'Truck', 'Egg', 
'Olympics', 'Volleyball', 'Eiffel Tower', 'Peanut', 'Abraham Lincoln', 'Kiss', 'Pigtails', 'Brain', 'Kitten', 'Playground', 
'Bubble bath', 'Kiwi', 'Pumpkin pie', 'Buckle', 'Lipstick', 'Raindrop', 'Bus', 'Lobster', 'Robot', 'Car accident', 'Lollipop', 
'Sand castle', 'Castle', 'Magnet', 'Slipper', 'Chain saw', 'Megaphone', 'Snowball', 'Circus tent', 'Mermaid', 'Sprinkler', 
'Computer', 'Minivan', 'Statue of Liberty', 'Crib', 'Mount Rushmore', 'Tadpole', 'Dragon', 'Music', 'Teepee', 'Dumbbell', 
'North pole', 'Telescope', 'Eel', 'Nurse', 'Train', 'Ferris wheel', 'Owl', 'Tricycle', 'Flag', 'Pacifier', 'Tutu', 'Junk mail', 
'Piano', 'Attic', 'Glue', 'Pocket watch', 'Back seat', 'Highchair', 'Rock band', 'Birthday', 'Hockey', 'Sasquatch', 'Black hole', 
'Hotel', 'Scrambled eggs', 'Blizzard', 'Jump rope', 'Seat belt', 'Burrito', 'Koala', 'Skip', 'Captain', 'Leprechaun', 
'Solar eclipse', 'Chandelier', 'Light', 'Space', 'Crib', 'Mask', 'Stethoscope', 'Cruise ship', 'Mechanic', 'Stork', 'Dance', 
'Mom', 'Sunburn', 'Deodorant', 'Mr Potato Head', 'Thread', 'Facebook', 'Pantyhose', 'Tourist', 'Flat', 'Paper plate', 
'United States', 'Frame', 'Photo', 'WiFi', 'Full moon', 'Pilgram', 'Zombie', 'Game', 'Pirate']

class App extends Component {
    
    state = {
        count: 0,
        number: 0,
        name: words[0]
    }


    dec = () => this.setState(({ count }) => ({ count: count - 1 }))
    inc = () => this.setState(({ count }) => ({ count: count + 1 }))
    random = () => this.setState({ number: Math.round(Math.random() * 100) })
    
    nc = () => this.setState(({ name, number }) => ({ name: words[number] }))

    render() {
        const { count, number, name } = this.state
        return (
            <Fragment>
                <Counter count = {count} dec = {this.dec} inc = {this.inc}/>
                <Random number = {number} random = {this.random}/>
                <Name name = {name}  nc = {this.nc}/>

            </Fragment>
        )
    }
}



const root = document.getElementById('root')
ReactDOM.render(<App/>, root)