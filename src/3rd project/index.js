import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style.css'

const Season = ({ value }) => {
    // return (
    //     <div className="season">
    //         <img className="season__img" src="/img/winter.jpg" alt=""/>
    //         <div className="season__name">Зима</div>
    //     </div>
    // )

    // if (value === 1) {
    //     return (
    //         <div className="season">
    //             <img className="season__img" src="/img/winter.jpg" alt=""/>
    //             <div className="season__name">Зима</div>
    //         </div>
    //     )
    // } else if (value === 2) {
    //     return (
    //         <div className="season">
    //             <img className="season__img" src="/img/autumn.jpg" alt=""/>
    //             <div className="season__name">Осень</div>
    //         </div>
    //     )
    // } else if (value === 3) {
    //     return (
    //         <div className="season">
    //             <img className="season__img" src="/img/summer.jpg" alt=""/>
    //             <div className="season__name">Лето</div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="season">
    //             <img className="season__img" src="/img/spring.jpg" alt=""/>
    //             <div className="season__name">Весна</div>
    //         </div>
    //     )
    // }

    // switch (value) {
    //     case 1: 
    //         return (
    //             <div className="season">
    //                 <img className="season__img" src="/img/winter.jpg" alt=""/>
    //                 <div className="season__name">Зима</div>
    //             </div>
    //         )
    //     case 2: 
    //         return (
    //             <div className="season">
    //                 <img className="season__img" src="/img/autumn.jpg" alt=""/>
    //                 <div className="season__name">Осень</div>
    //             </div>
    //         )
    //     case 3: 
    //         return (
    //             <div className="season">
    //                 <img className="season__img" src="/img/summer.jpg" alt=""/>
    //                 <div className="season__name">Лето</div>
    //             </div>
    //         )
    //     default: 
    //         return (
    //         <div className="season">
    //             <img className="season__img" src="/img/spring.jpg" alt=""/>
    //             <div className="season__name">Весна</div>
    //         </div>
    //     )
    // }

    // return value === 1 ? (
    //     <div className="season">
    //         <img className="season__img" src="/img/winter.jpg" alt=""/>
    //         <div className="season__name">Зима</div>
    //     </div>
    // ) : value === 2 ? (
    //     <div className="season">
    //         <img className="season__img" src="/img/autumn.jpg" alt=""/>
    //         <div className="season__name">Осень</div>
    //     </div>
    // ) : value === 3 ? (
    //     <div className="season">
    //         <img className="season__img" src="/img/summer.jpg" alt=""/>
    //         <div className="season__name">Лето</div>
    //     </div>
    // ) : (
    //     <div className="season">
    //         <img className="season__img" src="/img/spring.jpg" alt=""/>
    //         <div className="season__name">Весна</div>
    //     </div>
    // )   

    // return (
    //     <div className='season'>
    //     {value === 1 ? (
    //         <Fragment>
    //             <img className="season__img" src="/img/winter.jpg" alt=""/>
    //             <div className="season__name">Зима</div>            
    //         </Fragment>
    //         ) : value === 2 ? (
    //         <Fragment>
    //             <img className="season__img" src="/img/autumn.jpg" alt=""/>
    //             <div className="season__name">Осень</div>            
    //         </Fragment>
    //         ) : value === 3 ? (
    //         <Fragment>
    //             <img className="season__img" src="/img/summer.jpg" alt=""/>
    //             <div className="season__name">Лето</div>            
    //         </Fragment>
    //         ) : value === 4 ? (
    //         <Fragment>
    //             <img className="season__img" src="/img/sping.jpg" alt=""/>
    //             <div className="season__name">Весна</div>            
    //         </Fragment>
    //         )}
    //     </div>
    // )

    // return (
    //     <div className="season">
    //         <img className="season__img" src={
    //             value === 1 ? '/img/winter.jpg' :
    //             value === 2 ? '/img/autumn.jpg' :
    //             value === 3 ? '/img/summer.jpg' :
    //             '/img/spring.jpg'
    //         } alt=""/>
    //         <div className="season__name">{
    //             value === 1 ? 'Зима' :
    //             value === 2 ? 'Осень' :
    //             value === 3 ? 'Лето' :
    //             'Весна'
    //         }</div>
    //     </div>
    // )

    return (
        <div className="season">
            {value === 1 && (
                <Fragment>
                    <img className="season__img" src="/img/winter.jpg" alt=""/>
                    <div className="season__name">Зима</div>
                </Fragment>
            )}
            {value === 2 && (
                <Fragment>
                    <img className="season__img" src="/img/autumn.jpg" alt=""/>
                    <div className="season__name">Осень</div>
                </Fragment>
            )}
            {value === 3 && (
                <Fragment>
                    <img className="season__img" src="/img/summer.jpg" alt=""/>
                    <div className="season__name">Лето</div>
                </Fragment>
            )}
            {value === 4 && (
                <Fragment>
                    <img className="season__img" src="/img/spring.jpg" alt=""/>
                    <div className="season__name">Весна</div>
                </Fragment>
            )}
        </div>
    )
}



Season.propTypes = {
    value: PropTypes.number.isRequired
}

const root = document.getElementById('root')
ReactDOM.render(<Season value={2}/>, root)